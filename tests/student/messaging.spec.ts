import { expect, test } from '@playwright/test';
import { loginAs } from '../helpers/auth';

test('Student can send a message in the selected conversation', async ({ page }) => {
  await loginAs(page, 'student');
  await page.getByRole('button', { name: 'Messages', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Messages', exact: true })).toBeVisible();

  const message = 'Please confirm the next project consultation time.';
  await page.getByPlaceholder('Type a message...').fill(message);
  await page.getByRole('button', { name: 'Send', exact: true }).click();

  await expect(page.getByRole('main').getByText(message, { exact: true }).last()).toBeVisible();
});