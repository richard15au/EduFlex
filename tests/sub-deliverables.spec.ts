import { expect, test } from '@playwright/test';

test.describe('Sub-Deliverable Submission Links Suite', () => {
  test('Submission links exist for each report and deliverable with modal actions', async ({ page }) => {
    // 1. Log in as student Richard Vitug
    await page.goto('/login');
    await page.getByLabel('Email address').fill('20030988@eduflex.en-rich.me');
    await page.locator('input[type="password"]').fill('student123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page).toHaveURL(/\/student$/, { timeout: 15000 });

    // 2. Navigate to Assessments
    await page.getByRole('button', { name: /Assessments|Assignments/i }).first().click();
    await expect(page.getByRole('heading', { name: /Assessments/i })).toBeVisible();

    // 3. Open Assessment 1 (Weekly Progress Reports Weeks 2–11)
    await page.locator('[data-testid="assessment-item-ict302-ass1"]').click();
    await expect(page.getByText(/Weekly Progress (Reports|& Self-Reflection) Breakdown/i)).toBeVisible();

    // 4. Verify Week 2 Submission Link
    const week2Item = page.locator('[data-testid="sub-deliverable-item-ict302-ass1-w2"]');
    await expect(week2Item).toBeVisible();
    await expect(week2Item.getByText('#EDF-2026-3021')).toBeVisible();
    await expect(week2Item.getByRole('button', { name: 'Week 2 Submission Link' })).toBeVisible();

    // Click Week 2 Submission Link to view verified submission modal
    await week2Item.getByRole('button', { name: 'Week 2 Submission Link' }).click();
    await expect(page.getByRole('heading', { name: 'Week 2 Submission Link' })).toBeVisible();
    await expect(page.getByText('Verified Authoritative Submission')).toBeVisible();
    await expect(page.getByText('9.5/10', { exact: true })).toBeVisible();
    await expect(page.getByText('Exceptional Week 2 progress report').first()).toBeVisible();

    // Close Week 2 modal
    await page.getByRole('button', { name: '✕' }).click();

    // 5. Verify Week 3 Submission Link (Due Soon)
    const week3Item = page.locator('[data-testid="sub-deliverable-item-ict302-ass1-w3"]');
    await expect(week3Item).toBeVisible();
    const week3LinkBtn = week3Item.getByRole('button', { name: 'Week 3 Submission Link' });
    await expect(week3LinkBtn).toBeVisible();

    // Click Week 3 Submission Link to open submission form modal
    await week3LinkBtn.click();
    await expect(page.getByRole('heading', { name: 'Week 3 Submission Link' })).toBeVisible();

    // Attach sample deliverable
    await page.getByRole('button', { name: '+ Attach Sample File' }).click();
    await expect(page.getByText('ICT302_WPR_Week3_Vitug.pdf')).toBeVisible();

    // Submit Week 3 report
    await page.getByRole('button', { name: /Submit Week 3 Submission Link/i }).click();

    // Verify submission succeeds and authoritative receipt is shown
    await expect(page.getByText('Week 3 Submission Link Submitted Successfully!')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/#EDF-2026-\d{4}/).first()).toBeVisible();

    // Close success modal
    await page.getByRole('button', { name: 'Done & Close Link' }).click();

    // Verify Week 3 now displays Submitted (Verified) and ratio badge updated to 2/10
    await expect(week3Item.getByText('Submitted (Verified)')).toBeVisible();
    await expect(page.getByText('2/10 Submitted').first()).toBeVisible();

    // Take screenshot of Assessment 1 view showing submission links
    await page.screenshot({ path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/verified_assessment1_links.png' });

    // 6. Navigate back to Assignments list
    await page.getByRole('button', { name: /Back to Assignments/i }).click();

    // 7. Open Assessment 2 (Final Report and Group Activity Log)
    await page.locator('[data-testid="assessment-item-ict302-ass2"]').click();
    await expect(page.getByText('Assessment 2 Deliverables Breakdown (2 Submissions)')).toBeVisible();

    // 8. Verify Deliverable 1 has Final Report Submission Link
    const finalReportItem = page.locator('[data-testid="sub-deliverable-item-ict302-ass2-d1"]');
    await expect(finalReportItem).toBeVisible();
    await expect(finalReportItem.getByRole('button', { name: 'Final Report Submission Link' })).toBeVisible();

    // 9. Verify Deliverable 2 has Group Activity Log Submission Link
    const groupLogItem = page.locator('[data-testid="sub-deliverable-item-ict302-ass2-d2"]');
    await expect(groupLogItem).toBeVisible();
    await expect(groupLogItem.getByText('#EDF-2026-3022')).toBeVisible();
    const groupLogLinkBtn = groupLogItem.getByRole('button', { name: 'Group Activity Log Submission Link' });
    await expect(groupLogLinkBtn).toBeVisible();

    // Click Group Activity Log Submission Link to view verified submission modal
    await groupLogLinkBtn.click();
    await expect(page.getByRole('heading', { name: 'Group Activity Log Submission Link' })).toBeVisible();
    await expect(page.getByText('ICT302_Assessment2_Part2_GroupActivityLog.pdf').first()).toBeVisible();
    await expect(page.getByText('9.2/10', { exact: true })).toBeVisible();

    // Take screenshot of modal for artifact verification
    await page.screenshot({ path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/verified_sub_deliverable_modal.png' });

    // Close modal
    await page.getByRole('button', { name: '✕' }).click();

    // Take screenshot of Assessment 2 view showing both submission links
    await page.screenshot({ path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/verified_assessment2_links.png' });
  });
});
