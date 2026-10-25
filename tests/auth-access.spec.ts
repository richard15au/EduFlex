import { expect, test } from '@playwright/test';

for (const route of ['/student', '/instructor', '/admin']) {
  test(`unauthenticated visitors cannot access ${route}`, async ({ page }) => {
    await page.goto(route);

    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole('heading', { name: 'Pick up where you left off.' })).toBeVisible();
  });
}