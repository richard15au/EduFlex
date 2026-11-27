import { expect, test } from '@playwright/test';

test('seeded Student can access the Student dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email address').fill('20030988@eduflex.richv.win');
  await page.locator('input[type="password"]').fill('student123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL(/\/student$/, { timeout: 15000 });
  await expect(page.getByRole('heading', { name: 'Welcome to EduFlex, Richard!' })).toBeVisible();
  await expect(page.getByText('Richard Vitug', { exact: true })).toBeVisible();
  // Verify student number displayed below name in header
  await expect(page.locator('header').getByText('20030988')).toBeVisible();
  // Verify theme toggle button is visible in header
  await expect(page.getByRole('button', { name: 'Toggle Theme' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Enrolled Courses' })).toBeVisible();
  await expect(page.getByText(/Information Technology Project [12]/).first()).toBeVisible();
  await expect(page.getByText(/Bachelor of Information Technology — (Semester|Trimester) T\d+/)).toBeVisible();
});

test('Sadia sees her own profile instead of the default Richard profile', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email address').fill('20035294@eduflex.en-rich.me');
  await page.locator('input[type="password"]').fill('student123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL(/\/student$/);
  await page.getByRole('button', { name: /profile/i }).click();

  await expect(page.getByRole('heading', { name: 'Sadia Binte Mahmud' })).toBeVisible();
  await expect(page.getByText('Student ID', { exact: true }).locator('..')).toContainText('20035294');
  await expect(page.locator('main').getByText('20030988', { exact: true })).toHaveCount(0);
  await expect(page.locator('main').getByText('Richard Vitug', { exact: true })).toHaveCount(0);
});