import { expect, test } from '@playwright/test';
import { loginAs } from '../helpers/auth';

test.describe('Student Server Actions & SSR Data Binding', () => {
  test('unauthenticated request redirects to /login', async ({ page }) => {
    // Clear cookies/storage and visit /student
    await page.context().clearCookies();
    await page.goto('/student');
    await expect(page).toHaveURL(/\/login$/);
  });

  test('authenticated student receives live course and deadline data from database', async ({ page }) => {
    await loginAs(page, 'student');
    await expect(page).toHaveURL(/\/student$/);

    // Verify student name and program rendered from Neon DB
    await expect(page.getByRole('heading', { name: 'Welcome to EduFlex, Richard!' })).toBeVisible();
    await expect(page.getByText('Bachelor of Information Technology — Semester T226', { exact: true })).toBeVisible();

    // Verify enrolled course cards from DB
    await expect(page.getByRole('button', { name: 'Enrolled Courses' })).toBeVisible();
    await expect(page.getByText('Information Technology Project 1', { exact: true })).toBeVisible();
    await expect(page.getByText('Web Design and Development', { exact: true })).toBeVisible();
    await expect(page.getByText('Artificial Intelligence', { exact: true })).toBeVisible();

    // Verify course unit codes
    await expect(page.getByText('ICT301', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('ICT272', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('ICT126', { exact: true }).first()).toBeVisible();

    // Verify navigation to My Courses shows active courses grid
    await page.getByRole('button', { name: 'My Courses', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'My Courses', exact: true })).toBeVisible();
    await expect(page.getByText('Active Courses (3)')).toBeVisible();
  });
});
