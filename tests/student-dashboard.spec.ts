import { expect, test } from '@playwright/test';

test('seeded Student can access the Student dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email address').fill('2003988@eduflex.edu');
  await page.locator('input[type="password"]').fill('student123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL(/\/student$/);
  await expect(page.getByRole('heading', { name: 'Welcome to EduFlex, Richard!' })).toBeVisible();
  await expect(page.getByText('Richard Maceda Vitug', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Enrolled Courses' })).toBeVisible();
  await expect(page.getByText('Information Technology Project 1', { exact: true })).toBeVisible();
  await expect(page.getByText('Bachelor of Information Technology — Semester T226', { exact: true })).toBeVisible();
});