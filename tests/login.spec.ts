import { expect, test } from '@playwright/test';

test('EduFlex login redirects the seeded demo user to the authenticated dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email address').fill('2003988@eduflex.edu');
  await page.locator('input[type="password"]').fill('student123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL(/\/student$/);
  await expect(page.getByRole('heading', { name: /Welcome to EduFlex, Richard!/ })).toBeVisible();
  await expect(page.getByLabel('Email address')).toHaveCount(0);
});