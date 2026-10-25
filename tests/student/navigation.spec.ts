import { expect, test } from '@playwright/test';
import { loginAs } from '../helpers/auth';

test('Student navigation opens each implemented dashboard section', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await loginAs(page, 'student');
  await expect(page).toHaveURL(/\/student$/);
  await expect(page.getByRole('heading', { name: 'Welcome to EduFlex, Richard!' })).toBeVisible();

  await page.getByRole('button', { name: 'My Courses', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'My Courses', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Assignments', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Assignments & Assessments' })).toBeVisible();

  await page.getByRole('button', { name: 'Quizzes', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Quizzes & Exams' })).toBeVisible();

  await page.getByRole('button', { name: 'Learning Materials', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Learning Materials', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Grades', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Grades', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Calendar', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Calendar', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Announcements', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Announcements', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Messages', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Messages', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Profile', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'My Profile', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Settings', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Settings', exact: true })).toBeVisible();
  expect(pageErrors).toEqual([]);
});