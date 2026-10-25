import { expect, test } from '@playwright/test';
import { institutionalAccounts, loginAs, seededAccounts, type SeededRole } from '../helpers/auth';

for (const role of Object.keys(seededAccounts) as SeededRole[]) {
  const account = seededAccounts[role];

  test(`${role} login persists across reload and logout clears the session`, async ({ page }) => {
    await loginAs(page, role);

    await expect(page).toHaveURL(new RegExp(`/${role}$`));
    await expect(page.getByText(account.name, { exact: true })).toBeVisible();
    await expect.poll(() => page.evaluate(() => localStorage.getItem('eduflex_current_user')))
      .toContain(account.email);

    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/${role}$`));
    await expect(page.getByText(account.name, { exact: true })).toBeVisible();

    await page.getByRole('button', { name: 'Logout' }).click();
    await expect(page).toHaveURL('/');
    await expect.poll(() => page.evaluate(() => localStorage.getItem('eduflex_current_user')))
      .toBeNull();
  });
}

for (const role of Object.keys(institutionalAccounts) as SeededRole[]) {
  const account = institutionalAccounts[role];

  test(`institutional ${role} (${account.email}) logs in, accesses /${role}, persists across reload, and logs out`, async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email address').fill(account.email);
    await page.locator('input[type="password"]').fill(account.password);
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page).toHaveURL(new RegExp(`/${role}$`));
    await expect(page.getByText(account.name, { exact: true })).toBeVisible();

    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/${role}$`));

    await page.getByRole('button', { name: 'Logout' }).click();
    await expect(page).toHaveURL('/');
    await expect.poll(() => page.evaluate(() => localStorage.getItem('eduflex_current_user')))
      .toBeNull();
  });
}

test('case-insensitive email login works for instructor and admin accounts', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email address').fill('  Anita.Humagain@RichAcademy.en-rich.me  ');
  await page.locator('input[type="password"]').fill('instructor123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL(/\/instructor$/);
  await expect(page.getByText('Anita Humagain', { exact: true })).toBeVisible();
});

test('trusted role determines portal access rather than email pattern alone', async ({ page }) => {
  const customAdminLikeEmail = 'a.untrusted.user@richacademy.en-rich.me';
  await page.goto('/register');
  await page.getByLabel('Full name').fill('Untrusted Pattern User');
  await page.getByLabel('Email address').fill(customAdminLikeEmail);
  await page.getByLabel('Create password').fill('password123');
  await page.getByLabel('Confirm password').fill('password123');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: /Create account/i }).click();

  await expect(page).toHaveURL(/\/login$/);
  await page.getByLabel('Email address').fill(customAdminLikeEmail);
  await page.locator('input[type="password"]').fill('password123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Even though the email starts with "a.", self-registration assigns trusted role "student"
  await expect(page).toHaveURL(/\/student$/);

  // Attempting to visit /admin directly must redirect back to /student
  await page.goto('/admin');
  await expect(page).toHaveURL(/\/student$/);
});

test('self-registration cannot overwrite or downgrade seeded instructor/admin roles in localStorage', async ({ page }) => {
  await page.goto('/register');
  await page.getByLabel('Full name').fill('Attempted Overwrite');
  await page.getByLabel('Email address').fill(institutionalAccounts.admin.email);
  await page.getByLabel('Create password').fill('admin123');
  await page.getByLabel('Confirm password').fill('admin123');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: /Create account/i }).click();

  await expect(page).toHaveURL(/\/login$/);
  await page.getByLabel('Email address').fill(institutionalAccounts.admin.email);
  await page.locator('input[type="password"]').fill(institutionalAccounts.admin.password);
  await page.getByRole('button', { name: 'Log in' }).click();

  // Admin retains trusted "admin" role and lands on /admin
  await expect(page).toHaveURL(/\/admin$/);
  await expect(page.getByText(institutionalAccounts.admin.name, { exact: true })).toBeVisible();
});

test('invalid login shows an error and remains on the login page', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email address').fill(seededAccounts.student.email);
  await page.locator('input[type="password"]').fill('not-the-seeded-password');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByText('Invalid email or password.')).toBeVisible();
});