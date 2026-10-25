import { expect, test } from '@playwright/test';
import { loginAs } from '../helpers/auth';

test.describe('Student Portal Feature Workflows', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page, 'student');
    await expect(page).toHaveURL(/\/student$/);
  });

  test('Assignments view, form validation, and deliverable submission', async ({ page }) => {
    await page.getByRole('button', { name: 'Assignments', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Assignments & Assessments' })).toBeVisible();

    // Click on the first unsubmitted assignment row to view details
    await page.getByTitle(/Click to view details/i).first().click();

    // Verify assignment detail view opens
    await expect(page.getByRole('button', { name: /Back to Assignments/i })).toBeVisible();

    const submitBtn = page.getByRole('button', { name: /^Submit (Assignment|Assessment)$/i });
    if (await submitBtn.isVisible()) {
      // 1. Verify form validation when no file is attached
      await submitBtn.click();
      await expect(page.getByText(/Please upload or attach your submission file/i)).toBeVisible();

      // 2. Attach sample file
      await page.getByRole('button', { name: /\+ Attach sample file/i }).click();

      // 3. Verify form validation when academic integrity checkbox is unchecked
      const integrityCheckbox = page.getByRole('checkbox').first();
      await expect(integrityCheckbox).not.toBeChecked();
      await submitBtn.click();
      await expect(page.getByText(/Please accept the Academic Integrity Declaration/i)).toBeVisible();

      // 4. Check academic integrity declaration and submit
      await integrityCheckbox.check();
      await submitBtn.click();
    }

    // Should display submitted status and receipt
    await expect(page.getByText(/Submitted Successfully|Submitted|Graded/i).first()).toBeVisible();
  });

  test('Quiz attempt, answering and submission flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Quizzes', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Quizzes & Exams' })).toBeVisible();

    // Click Start on the first open quiz in the list to open QuizDetailsView
    const startBtn = page.getByRole('button', { name: /^Start$/i }).first();
    await expect(startBtn).toBeVisible();
    await startBtn.click();

    // Inside QuizDetailsView, click Start Quiz Now to begin the timed attempt
    const startQuizNowBtn = page.getByRole('button', { name: /Start Quiz Now/i });
    await expect(startQuizNowBtn).toBeVisible();
    await startQuizNowBtn.click();

    // Select an option on the first question (Option A inside main quiz area)
    const optionA = page.locator('main button').filter({ hasText: /^A/ }).first();
    await expect(optionA).toBeVisible();
    await optionA.click();

    // Click Submit Quiz in the header
    const submitQuizBtn = page.getByRole('button', { name: 'Submit Quiz' }).first();
    await expect(submitQuizBtn).toBeVisible();
    await submitQuizBtn.click();

    // Confirm submission in the confirmation modal
    const confirmSubmitBtn = page.getByRole('button', { name: /Confirm & Submit/i });
    await expect(confirmSubmitBtn).toBeVisible();
    await confirmSubmitBtn.click();

    // Verify result score view is displayed
    await expect(page.getByText(/Quiz Completed|Score|Result|Question Breakdown/i).first()).toBeVisible();
  });

  test('Learning materials preview and download triggers', async ({ page }) => {
    await page.getByRole('button', { name: 'Learning Materials', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Learning Materials', exact: true })).toBeVisible();

    // Filter using stat card
    await page.getByRole('button', { name: 'Course Materials', exact: true }).click();

    // Click Open / Preview on first item
    const previewBtn = page.getByRole('button', { name: /Open|Watch|Download/i }).first();
    await expect(previewBtn).toBeVisible();
    await previewBtn.click();

    // Verify modal or download toast appears
    await expect(page.getByText(/Preview|Downloading|Download|Close/i).first()).toBeVisible();
  });

  test('Calendar schedules and event details modal', async ({ page }) => {
    await page.getByRole('button', { name: 'Calendar', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Calendar', exact: true })).toBeVisible();

    // Upcoming event items should be clickable
    const eventItem = page.locator('div[role="button"], button').filter({ hasText: /ICT301|ICT272|ICT126|Sprint|Lecture/i }).first();
    if (await eventItem.isVisible()) {
      await eventItem.click();
      // Event modal opens
      await expect(page.getByText(/Event Details|Schedule|Location|Reminder/i).first()).toBeVisible();
      const closeBtn = page.getByRole('button', { name: /Close/i }).first();
      if (await closeBtn.isVisible()) {
        await closeBtn.click();
      }
    }
  });

  test('Student profile and settings preferences', async ({ page }) => {
    await page.getByRole('button', { name: 'Settings', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Settings', exact: true })).toBeVisible();

    const saveBtn = page.getByRole('button', { name: /Save Changes|Save Preferences/i });
    if (await saveBtn.isVisible()) {
      await saveBtn.click();
      await expect(page.getByText(/Saved|Preferences saved|Settings saved/i).first()).toBeVisible();
    }
  });
});
