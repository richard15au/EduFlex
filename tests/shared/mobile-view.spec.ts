import { expect, test } from '@playwright/test';
import { loginAs } from '../helpers/auth';

test.describe('Mobile Viewport & Navigation Drawer Verification', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('Student Portal: Responsive layout, zero horizontal overflow, and mobile navigation drawer', async ({ page }) => {
    await loginAs(page, 'student');
    await expect(page).toHaveURL(/\/student$/);

    // Verify no horizontal overflow on dashboard
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
    });
    expect(hasOverflow).toBe(false);

    // Verify hamburger button is visible on mobile
    const hamburgerBtn = page.getByRole('button', { name: 'Open navigation menu' });
    await expect(hamburgerBtn).toBeVisible();

    // Verify sidebar is initially off-screen
    const aside = page.locator('aside');
    await expect(aside).toHaveClass(/-translate-x-full/);

    // Click hamburger button to open sidebar drawer
    await hamburgerBtn.click();
    await expect(aside).toHaveClass(/translate-x-0/);

    // Close button should be visible in drawer
    const closeBtn = page.getByRole('button', { name: 'Close menu' });
    await expect(closeBtn).toBeVisible();

    // Navigate to Assignments via mobile drawer
    const assignmentsNavBtn = aside.getByRole('button', { name: 'Assignments' });
    await assignmentsNavBtn.click();

    // Drawer should automatically close after navigation
    await expect(aside).toHaveClass(/-translate-x-full/);

    // Page content is updated
    await expect(page.getByRole('heading', { name: 'Assignments' })).toBeVisible();

    // Check no horizontal overflow on Assignments page
    const assignmentsOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
    });
    expect(assignmentsOverflow).toBe(false);
  });

  test('Instructor Portal: Responsive layout, zero horizontal overflow, and mobile drawer navigation', async ({ page }) => {
    await loginAs(page, 'instructor');
    await expect(page).toHaveURL(/\/instructor$/);

    // Verify no horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
    });
    expect(hasOverflow).toBe(false);

    // Hamburger button is visible
    const hamburgerBtn = page.getByRole('button', { name: 'Open navigation menu' });
    await expect(hamburgerBtn).toBeVisible();

    // Sidebar drawer off-screen
    const aside = page.locator('aside');
    await expect(aside).toHaveClass(/-translate-x-full/);

    // Open mobile drawer
    await hamburgerBtn.click();
    await expect(aside).toHaveClass(/translate-x-0/);

    // Close button visible
    const closeBtn = page.getByRole('button', { name: 'Close menu' });
    await expect(closeBtn).toBeVisible();

    // Navigate to Students page
    const studentsNavBtn = aside.getByRole('button', { name: 'Students' });
    await studentsNavBtn.click();

    // Drawer closes after navigation
    await expect(aside).toHaveClass(/-translate-x-full/);

    // Check no horizontal overflow on Students page
    const studentsOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
    });
    expect(studentsOverflow).toBe(false);
  });

  test('Admin Portal: Responsive layout, zero horizontal overflow, and mobile drawer navigation', async ({ page }) => {
    await loginAs(page, 'admin');
    await expect(page).toHaveURL(/\/admin$/);

    // Verify no horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
    });
    expect(hasOverflow).toBe(false);

    // Hamburger button is visible
    const hamburgerBtn = page.getByRole('button', { name: 'Open navigation menu' });
    await expect(hamburgerBtn).toBeVisible();

    // Sidebar drawer off-screen
    const aside = page.locator('aside');
    await expect(aside).toHaveClass(/-translate-x-full/);

    // Open mobile drawer
    await hamburgerBtn.click();
    await expect(aside).toHaveClass(/translate-x-0/);

    // Close button visible
    const closeBtn = page.getByRole('button', { name: 'Close menu' });
    await expect(closeBtn).toBeVisible();

    // Navigate to User Management
    const usersNavBtn = aside.getByRole('button', { name: 'User Management' });
    await usersNavBtn.click();

    // Drawer closes after navigation
    await expect(aside).toHaveClass(/-translate-x-full/);

    // Check no horizontal overflow on User Management page
    const usersOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
    });
    expect(usersOverflow).toBe(false);
  });

  test('Backdrop overlay closes mobile drawer on outside tap', async ({ page }) => {
    await loginAs(page, 'student');
    await expect(page).toHaveURL(/\/student$/);

    const hamburgerBtn = page.getByRole('button', { name: 'Open navigation menu' });
    await hamburgerBtn.click();

    const aside = page.locator('aside');
    await expect(aside).toHaveClass(/translate-x-0/);

    // Click backdrop overlay (outside drawer at right edge of viewport)
    await page.mouse.click(350, 300);

    // Drawer should close
    await expect(aside).toHaveClass(/-translate-x-full/);
  });
});
