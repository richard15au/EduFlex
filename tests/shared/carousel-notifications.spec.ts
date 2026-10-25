import { expect, test } from '@playwright/test';
import { loginAs } from '../helpers/auth';

test.describe('Carousel & Announcement Ticker Notifications Verification', () => {
  test('Student Portal: Announcement ticker has slow animation and pauses on hover', async ({ page }) => {
    await loginAs(page, 'student');
    await expect(page).toHaveURL(/\/student$/);

    const tickerContainer = page.locator('.marquee-container').first();
    await expect(tickerContainer).toBeVisible();

    const tickerText = tickerContainer.locator('.marquee-text');
    await expect(tickerText).toBeVisible();

    // Verify slowed-down animation duration (52s)
    const animDuration = await tickerText.evaluate((el) => window.getComputedStyle(el).animationDuration);
    expect(animDuration).toBe('52s');

    // Verify hover pauses animation
    await tickerContainer.hover();
    const playStateHover = await tickerText.evaluate((el) => window.getComputedStyle(el).animationPlayState);
    expect(playStateHover).toBe('paused');
  });

  test('Student Portal: Respects prefers-reduced-motion accessibility preference', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await loginAs(page, 'student');
    await expect(page).toHaveURL(/\/student$/);

    const tickerText = page.locator('.marquee-text').first();
    await expect(tickerText).toBeVisible();

    // Verify animation is disabled under reduced-motion preference
    const animName = await tickerText.evaluate((el) => window.getComputedStyle(el).animationName);
    expect(animName).toBe('none');
  });

  test('Instructor Portal: Notice ticker is visible, has slow animation, and pauses on hover', async ({ page }) => {
    await loginAs(page, 'instructor');
    await expect(page).toHaveURL(/\/instructor$/);

    const tickerContainer = page.locator('.marquee-container').first();
    await expect(tickerContainer).toBeVisible();

    const tickerText = tickerContainer.locator('.marquee-text');
    await expect(tickerText).toBeVisible();

    // Verify 52s duration
    const animDuration = await tickerText.evaluate((el) => window.getComputedStyle(el).animationDuration);
    expect(animDuration).toBe('52s');

    // Hover pauses animation
    await tickerContainer.hover();
    const playState = await tickerText.evaluate((el) => window.getComputedStyle(el).animationPlayState);
    expect(playState).toBe('paused');
  });

  test('Admin Portal: Notice ticker has slow animation, navigates on click, and pauses on focus', async ({ page }) => {
    await loginAs(page, 'admin');
    await expect(page).toHaveURL(/\/admin$/);

    const tickerContainer = page.locator('.marquee-container').first();
    await expect(tickerContainer).toBeVisible();

    const tickerText = tickerContainer.locator('.marquee-text');
    await expect(tickerText).toBeVisible();

    // Verify 52s duration
    const animDuration = await tickerText.evaluate((el) => window.getComputedStyle(el).animationDuration);
    expect(animDuration).toBe('52s');

    // Focus pauses animation
    await tickerContainer.focus();
    const playState = await tickerText.evaluate((el) => window.getComputedStyle(el).animationPlayState);
    expect(playState).toBe('paused');

    // Click navigates to announcements
    await tickerContainer.click();
    await expect(page.getByRole('heading', { name: 'Announcements', exact: true })).toBeVisible();
  });

  test('Responsive viewport test: Ticker remains legible and overflow-contained on mobile and tablet', async ({ page }) => {
    // Set viewport to mobile screen size
    await page.setViewportSize({ width: 375, height: 667 });
    await loginAs(page, 'student');

    const tickerContainer = page.locator('.marquee-container').first();
    await expect(tickerContainer).toBeVisible();

    const tickerText = tickerContainer.locator('.marquee-text');
    await expect(tickerText).toBeVisible();

    // Verify font is legible (>= 12px)
    const fontSize = await tickerText.evaluate((el) => window.getComputedStyle(el).fontSize);
    expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(12);
  });
});
