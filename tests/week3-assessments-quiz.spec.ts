import { expect, test } from '@playwright/test';

test.describe('Week 3: Academic Assessments & Timed Quiz Engine Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Authenticate as student Richard Vitug
    await page.goto('/login');
    await page.getByLabel('Email address').fill('20030988@eduflex.richv.win');
    await page.locator('input[type="password"]').fill('student123');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page).toHaveURL(/\/student$/, { timeout: 15000 });
    await expect(page.getByRole('heading', { name: 'Welcome to EduFlex, Richard!' })).toBeVisible();
  });

  test('3.5: Authoritative Neon Database Time is synced without the removed pill badge', async ({ page }) => {
    // Welcome bar or page should display authoritative live date and time
    await expect(page.getByText(/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/i).first()).toBeVisible();
    await expect(page.getByText(/2026/i).first()).toBeVisible();

    // Verify the "• Neon DB Synced" badge is NOT rendered
    await expect(page.getByText('• Neon DB Synced')).not.toBeVisible();
    await expect(page.getByText('Neon DB Synced')).not.toBeVisible();
  });

  test('3.1 & 3.2: Assignment submission enforces Academic Integrity and generates #EDF-2026-XXXX receipt', async ({ page }) => {
    // Navigate to Assessments
    await page.getByRole('button', { name: /Assessments|Assignments/i }).first().click();
    await expect(page.getByRole('heading', { name: /Assessments/i })).toBeVisible();

    // Open Assessment 2 (which maintains course instructions and single deliverable submission form)
    const targetAssignment = page.locator('[data-testid="assessment-item-ict302-ass2"]');
    await targetAssignment.click();

    // Verify we are inside Assignment Details View
    await expect(page.getByText('Assignment Instructions & Objectives')).toBeVisible();

    // If already submitted, click Resubmit to test submission flow
    const resubmitBtn = page.getByRole('button', { name: /Resubmit Assignment/i });
    if (await resubmitBtn.isVisible()) {
      await resubmitBtn.click();
    }

    // Attach sample file if not already attached
    const sampleAttachBtn = page.getByRole('button', { name: /\+ Attach sample file/i });
    if (await sampleAttachBtn.isVisible()) {
      await sampleAttachBtn.click();
    }

    // Attempt to submit WITHOUT checking Academic Integrity
    const submitBtn = page.getByRole('button', { name: /^Submit (Assignment|Assessment)$/i });
    await submitBtn.click();

    // Verify validation error is displayed
    await expect(page.getByText('Please accept the Academic Integrity Declaration to proceed.')).toBeVisible();

    // Now accept Academic Integrity Declaration
    const integrityCheckbox = page.locator('input[type="checkbox"]').first();
    await integrityCheckbox.check();

    // Submit assignment
    await submitBtn.click();

    // Verify submission succeeds and official #EDF-2026-XXXX receipt is displayed
    await expect(page.getByText(/#EDF-2026-\d{4}/).first()).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/Submitted Successfully/i)).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/Academic Integrity Declaration Signed/i)).toBeVisible();
  });

  test('3.3: Multi-attempt resubmissions maintain audit revision trail', async ({ page }) => {
    // Navigate to Assessments
    await page.getByRole('button', { name: /Assessments|Assignments/i }).first().click();
    const targetAssignment = page.locator('[data-testid="assessment-item-ict302-ass2"]');
    await targetAssignment.click();

    // If not submitted yet, submit first attempt
    const resubmitBtn = page.getByRole('button', { name: /Resubmit Assignment/i });
    if (!(await resubmitBtn.isVisible())) {
      const sampleAttachBtn = page.getByRole('button', { name: /\+ Attach sample file/i });
      if (await sampleAttachBtn.isVisible()) {
        await sampleAttachBtn.click();
      }
      await page.locator('input[type="checkbox"]').first().check();
      await page.getByRole('button', { name: /^Submit (Assignment|Assessment)$/i }).click();
      await expect(page.getByText(/#EDF-2026-\d{4}/).first()).toBeVisible();
    }

    // Trigger Resubmission (Upload Revision)
    await page.getByRole('button', { name: /Resubmit Assignment/i }).click();

    // Attach revised sample file
    const sampleAttachBtn = page.getByRole('button', { name: /\+ Attach sample file/i });
    if (await sampleAttachBtn.isVisible()) {
      await sampleAttachBtn.click();
    }

    // Add optional marker comment for revision
    const commentsBox = page.locator('textarea');
    if (await commentsBox.isVisible()) {
      await commentsBox.fill('Revision 2: Addressed unit tests and documentation feedback.');
    }

    // Sign Academic Integrity Declaration
    await page.locator('input[type="checkbox"]').first().check();

    // Submit Attempt #2
    await page.getByRole('button', { name: /^Submit (Assignment|Assessment)$/i }).click();

    // Verify latest attempt badge
    await expect(page.getByText(/Attempt #\d+/i).first()).toBeVisible({ timeout: 15000 });

    // Verify Revision Audit Trail displays multiple attempts
    await expect(page.getByRole('heading', { name: /Revision Audit Trail/i })).toBeVisible();
  });

  test('3.4 & 3.6: Timed quiz engine protects answer keys server-side and scores attempt', async ({ page }) => {
    // Navigate to Quizzes
    await page.getByRole('button', { name: 'Quizzes', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Quizzes & Exams' })).toBeVisible();

    // Select ICT302 Sprint 1 Knowledge Check
    const quizItem = page.getByText(/Sprint 1 Knowledge Check/i).first();
    await quizItem.click();

    // Verify Quiz Details View is loaded
    await expect(page.getByRole('heading', { name: /Sprint 1 Knowledge Check/i })).toBeVisible();

    // Check if quiz is open or already completed
    const startBtn = page.getByRole('button', { name: /Start Quiz Now/i });
    const reviewBtn = page.getByRole('button', { name: /Review Answers/i });

    if (await startBtn.isVisible()) {
      // Start the timed quiz
      await startBtn.click();

      // Verify timer is active and counting down
      await expect(page.getByText(/Time Left:/i)).toBeVisible({ timeout: 15000 });

      // Task 3.6: Verify answer key is not leaked in the DOM during active attempt
      const leakedExplanations = page.locator('div, span, p').filter({ hasText: /Explanation:/i });
      await expect(leakedExplanations).toHaveCount(0);

      // Select an option for Question 1
      const firstOption = page.locator('div.space-y-3 button').first();
      await firstOption.click();

      // Proceed or Submit
      const finishBtn = page.getByRole('button', { name: /Submit Quiz|Finish Attempt/i });
      if (await finishBtn.isVisible()) {
        await finishBtn.click();

        // Confirm submission if modal appears
        const confirmModalBtn = page.getByRole('button', { name: /Yes, Submit|Confirm/i });
        if (await confirmModalBtn.isVisible()) {
          await confirmModalBtn.click();
        }
      }
    } else if (await reviewBtn.isVisible()) {
      // Review existing attempt
      await reviewBtn.click();
    }

    // Verify Quiz Results View
    await expect(page.getByRole('heading', { name: /Results/i })).toBeVisible();
    await expect(page.getByText(/Final Score/i)).toBeVisible();
    await expect(page.getByText('Percentage', { exact: true })).toBeVisible();

    // Post-submission review: explanations are now legitimately unlocked
    await expect(page.getByText(/Explanation:/i).first()).toBeVisible();
  });

  test('3.7: Assessment Filter dropdown filters between All, Assessment 1, 2, and 3', async ({ page }) => {
    // Navigate to Assessments
    await page.getByRole('button', { name: /Assessments|Assignments/i }).first().click();
    await expect(page.getByRole('heading', { name: /Assessments/i })).toBeVisible();

    // Verify 3 assessments & 100% total weight label is displayed, and no standalone ASSIGNMENTS block
    await expect(page.getByText(/3 Assessments · 100% Total Weight/i)).toBeVisible();
    await expect(page.getByText(/^ASSIGNMENTS \d+/i)).not.toBeVisible();

    // Click Assessment dropdown
    const filterBtn = page.getByRole('button', { name: /All Assessments/i }).first();
    await filterBtn.click();

    // Select Assessment 1 option
    await page.getByRole('button', { name: 'Assessment 1: Weekly Progress (20%)' }).click();

    // Verify Assessment 1 is visible
    await expect(page.getByText(/Assessment 1: Weekly Progress Report/i).first()).toBeVisible();
  });

  test('3.8: Assessment 1 displays 1/10 Submitted and Assessment 2 displays 1/2 Submitted', async ({ page }) => {
    // Navigate to Assessments
    await page.getByRole('button', { name: /Assessments|Assignments/i }).first().click();
    await expect(page.getByRole('heading', { name: /Assessments/i })).toBeVisible();

    // Verify Assessment 1 displays "1/10 Submitted" badge
    await expect(page.getByText('1/10 Submitted').first()).toBeVisible();

    // Verify Assessment 2 displays "1/2 Submitted" badge
    await expect(page.getByText('1/2 Submitted').first()).toBeVisible();

    // Click into Assessment 1 and verify 10 weekly submissions breakdown
    await page.locator('[data-testid^="assessment-item-ict302-ass1"]').click();
    await expect(page.getByText(/Weekly Progress (Reports|& Self-Reflection) Breakdown \(Weeks 2 to 11\)/i)).toBeVisible();
    await expect(page.getByText(/1\/10 Submitted/i).first()).toBeVisible();
    await expect(page.getByText(/W2/i)).toBeVisible();
    await expect(page.getByText(/W3/i)).toBeVisible();
    await expect(page.getByText(/W11/i)).toBeVisible();

    // Go back and click into Assessment 2 and verify 2 deliverables breakdown
    await page.getByRole('button', { name: /Back to Assignments|Back/i }).click();
    await page.locator('[data-testid^="assessment-item-ict302-ass2"]').click();
    await expect(page.getByText(/Assessment 2 Deliverables Breakdown/i)).toBeVisible();
    await expect(page.getByText(/1\/2 Submitted/i).first()).toBeVisible();
    await expect(page.getByText(/Final Project Report/i).first()).toBeVisible();
    await expect(page.getByText(/Group Activity Log/i).first()).toBeVisible();
  });
});
