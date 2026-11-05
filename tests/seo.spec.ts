import { test, expect } from '@playwright/test';

test.describe('Top #1 SEO & Crawler Optimization Tests', () => {
  test('robots.txt returns valid crawler directives protecting private portals', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body.toLowerCase()).toContain('user-agent: *');
    expect(body).toContain('Disallow: /student/');
    expect(body).toContain('Disallow: /instructor/');
    expect(body).toContain('Disallow: /admin/');
    expect(body).toContain('Sitemap: https://eduflex.edu/sitemap.xml');
  });

  test('sitemap.xml dynamically returns XML entries for public routes and Neon courses', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toContain('https://eduflex.edu');
    expect(body).toContain('/login');
    expect(body).toContain('/register');
    // Verifies courses from Neon DB are indexed
    expect(body).toContain('/courses/ict301');
  });

  test('homepage metadata and Schema.org rich snippets match top search target', async ({ page }) => {
    await page.goto('/');

    // 1. Title & Meta tags
    await expect(page).toHaveTitle(/Best Course Management Tools & University LMS/i);
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute('content', /premier modern course management platform/i);

    // 2. Headings on the page
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/The best course management tools/i);
    await expect(page.getByText(/MODERN HIGHER EDUCATION LMS/i)).toBeVisible();

    // 3. Schema.org JSON-LD scripts
    const schemas = await page.$$eval('script[type="application/ld+json"]', (elements) =>
      elements.map((el) => JSON.parse(el.textContent || '{}'))
    );

    expect(schemas.some((s) => s['@type'] === 'SoftwareApplication')).toBe(true);
    expect(schemas.some((s) => s['@type'] === 'FAQPage')).toBe(true);
    expect(schemas.some((s) => s['@type'] === 'EducationalOrganization')).toBe(true);
  });
});
