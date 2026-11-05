import { expect, test } from '@playwright/test';
import { loginAs } from './helpers/auth';

test('verify assignments page dark and light mode blending', async ({ page }) => {
  // 1. Log in as student
  await loginAs(page, 'student');

  await expect(page).toHaveURL(/\/student$/);
  await expect(page.getByText('Richard Maceda Vitug')).toBeVisible();

  // Navigate to Assignments
  await page.getByRole('button', { name: 'Assignments', exact: true }).click();
  await page.waitForTimeout(400);

  // Switch to Dark Mode
  const themeToggle = page.getByRole('button', { name: 'Toggle Theme' });
  await themeToggle.click();
  await page.waitForTimeout(500);

  // Verify dark class
  const isDark = await page.evaluate(() => document.querySelector('.min-h-screen')?.classList.contains('dark'));
  expect(isDark).toBe(true);

  // Take screenshot in Dark Mode
  await page.screenshot({ path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/assignments_dark.png' });

  // Check Assignments subheader background & title in dark mode
  const assignSubheader = page.locator('text=Regular coursework & lab exercises').locator('..');
  const assignSubheaderBg = await assignSubheader.evaluate((el) => window.getComputedStyle(el).backgroundColor);
  const assignTitleColor = await assignSubheader.locator('span.uppercase').evaluate((el) => window.getComputedStyle(el).color);

  // Check Assessments subheader background & title in dark mode
  const assessSubheader = page.locator('text=Major coursework, milestones & summative tasks').locator('..');
  const assessSubheaderBg = await assessSubheader.evaluate((el) => window.getComputedStyle(el).backgroundColor);
  const assessTitleColor = await assessSubheader.locator('span.uppercase').evaluate((el) => window.getComputedStyle(el).color);

  // Switch back to Light Mode to verify Day mode
  await themeToggle.click();
  await page.waitForTimeout(400);

  const lightAssignSubheaderBg = await assignSubheader.evaluate((el) => window.getComputedStyle(el).backgroundColor);
  const lightAssessSubheaderBg = await assessSubheader.evaluate((el) => window.getComputedStyle(el).backgroundColor);

  // Take screenshot in Light Mode
  await page.screenshot({ path: 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/assignments_light.png' });

  const fs = await import('fs');
  fs.writeFileSync('C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/scratch/assignments_colors.json', JSON.stringify({
    dark: {
      assignSubheaderBg,
      assignTitleColor,
      assessSubheaderBg,
      assessTitleColor
    },
    light: {
      lightAssignSubheaderBg,
      lightAssessSubheaderBg
    }
  }, null, 2));
});
