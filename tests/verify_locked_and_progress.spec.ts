import { expect, test } from '@playwright/test';

test('Verify Week X Progress titles and Locked Weeks 4 to 12', async ({ page }) => {
  // Clear localStorage to ensure fresh v11 state
  await page.goto('/login');
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  // Log in as Richard Vitug
  await page.getByLabel('Email address').fill('20030988@eduflex.en-rich.me');
  await page.locator('input[type="password"]').fill('student123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page).toHaveURL(/\/student$/, { timeout: 15000 });

  // Navigate to Assessments
  await page.getByRole('button', { name: /Assessments|Assignments/i }).first().click();
  await expect(page.getByRole('heading', { name: /Assessments/i })).toBeVisible();

  // Open Assessment 1 (Weekly Progress Reports Weeks 2 to 11)
  await page.locator('[data-testid="assessment-item-ict302-ass1"]').click();
  await expect(page.getByText(/Weekly Progress Reports Breakdown/i)).toBeVisible();

  // Verify Week 2 Progress
  const w2 = page.locator('[data-testid="sub-deliverable-item-ict302-ass1-w2"]');
  await expect(w2).toBeVisible();
  await expect(w2.getByText('Week 2 Progress')).toBeVisible();
  await expect(w2.getByText('Submitted (Verified)')).toBeVisible();
  await expect(w2.getByRole('button', { name: 'Week 2 Submission Link' })).toBeVisible();

  // Verify Week 3 Progress
  const w3 = page.locator('[data-testid="sub-deliverable-item-ict302-ass1-w3"]');
  await expect(w3).toBeVisible();
  await expect(w3.getByText('Week 3 Progress')).toBeVisible();
  await expect(w3.getByText('Due Soon (Current Week)')).toBeVisible();
  await expect(w3.getByRole('button', { name: 'Week 3 Submission Link' })).toBeVisible();

  // Verify Week 4 Progress (Locked)
  const w4 = page.locator('[data-testid="sub-deliverable-item-ict302-ass1-w4"]');
  await expect(w4).toBeVisible();
  await expect(w4.getByText('Week 4 Progress')).toBeVisible();
  await expect(w4.getByText('Locked').first()).toBeVisible();
  await expect(w4.getByText(/Locked until Nov 16, 2026/i)).toBeVisible();
  const w4LockedBtn = w4.getByRole('button', { name: /Locked/i });
  await expect(w4LockedBtn).toBeDisabled();

  // Verify Week 5 Progress (Locked)
  const w5 = page.locator('[data-testid="sub-deliverable-item-ict302-ass1-w5"]');
  await expect(w5).toBeVisible();
  await expect(w5.getByText('Week 5 Progress')).toBeVisible();
  await expect(w5.getByText('Locked').first()).toBeVisible();
  await expect(w5.getByText(/Locked until Nov 23, 2026/i)).toBeVisible();

  // Verify that Graded & Evaluated card, Instructions, Requirements, Rubric, and right-side Submission Status card are REMOVED from Assessment 1
  await expect(page.getByRole('heading', { name: 'Graded & Evaluated' })).not.toBeVisible();
  await expect(page.getByText('Assignment Instructions & Objectives')).not.toBeVisible();
  await expect(page.getByText('Submission Requirements & Policies')).not.toBeVisible();
  await expect(page.getByText('Marking Rubric & Grade Criteria')).not.toBeVisible();
  await expect(page.getByRole('heading', { name: /Submission Status|Submit Assignment|Resubmit Assignment/i })).not.toBeVisible();

  // Verify Assessment 1 Resources & Templates Card is VISIBLE with template, rubric, and brief
  const resCard = page.locator('[data-testid="assessment-1-resources-card"]');
  await expect(resCard).toBeVisible();
  await expect(resCard.getByText('ICT302_Weekly_Progress_Report_Template.docx')).toBeVisible();
  await expect(resCard.getByRole('button', { name: /Download Template/i })).toBeVisible();
  await expect(resCard.getByText('ICT302_Assessment1_Marking_Rubric.pdf')).toBeVisible();
  await expect(resCard.getByRole('button', { name: /Download Rubric/i })).toBeVisible();
  await expect(resCard.getByText('ICT302_Assessment1_Specification_Brief.pdf')).toBeVisible();
  await expect(resCard.getByRole('button', { name: /Download Brief/i })).toBeVisible();

  // Test downloading template
  await resCard.getByRole('button', { name: /Download Template/i }).click();
  await expect(page.getByText(/Downloading ICT302_Weekly_Progress_Report_Template.docx/i)).toBeVisible();

  // Scroll to top of Assessment 1 details
  await page.locator('text=Assessment 1: Weekly Progress Report').first().scrollIntoViewIfNeeded();

  // Capture screenshot of the top area showing Assessment 1 Resources & Templates
  await page.screenshot({
    path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/verified_assessment1_resources_and_rubric.png',
    fullPage: false
  });

  // Scroll to Weekly Progress Reports Breakdown
  const ass1Breakdown = page.locator('[data-testid="assessment-1-weekly-breakdown-card"]');
  await ass1Breakdown.scrollIntoViewIfNeeded();

  // Capture full viewport screenshot of Assessment 1 showing the full-width body layout
  await page.screenshot({
    path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/verified_assessment1_fullwidth_body.png',
    fullPage: false
  });

  // Capture screenshot of Assessment 1 breakdown section showing Week 2, Week 3, Week 4 (Locked), Week 5 (Locked)
  await ass1Breakdown.screenshot({
    path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/verified_week_progress_locked.png'
  });

  // Navigate back to Assessments
  await page.getByRole('button', { name: /Back to Assignments|Back to Assessments/i }).click();

  // Open Assessment 3
  await page.locator('[data-testid="assessment-item-ict302-ass3"]').click();
  await expect(page.getByText(/Assessment 3 Deliverables Breakdown/i)).toBeVisible();

  // Verify Deliverable 1 is Locked until Jan 18, 2027
  const p1 = page.locator('[data-testid="sub-deliverable-item-ict302-ass3-d1"]');
  await expect(p1).toBeVisible();
  await expect(p1.getByText('Locked').first()).toBeVisible();
  await expect(p1.getByText(/Locked until Jan 18, 2027/i)).toBeVisible();

  // Scroll to Assessment 3 Deliverables Breakdown
  const ass3Breakdown = page.locator('[data-testid="assessment-3-deliverables-breakdown-card"]');
  await ass3Breakdown.scrollIntoViewIfNeeded();

  // Capture screenshot of Assessment 3 showing locked status
  await ass3Breakdown.screenshot({
    path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/verified_assessment3_locked.png'
  });
});
