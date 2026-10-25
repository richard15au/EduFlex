import { test, expect } from '@playwright/test';

test('EduFlex home page loads', async ({ page }) => {
  const response = await page.goto('/');

  expect(response?.status(), 'home page HTTP status').toBe(200);
  await expect(page).toHaveTitle(/EduFlex/i);
  await expect(page.getByText('EduFlex', { exact: true })).toBeVisible();
  await expect(page.locator('body')).not.toContainText(
    /application error|internal server error|404 - not found|this page could not be found/i,
  );
});
