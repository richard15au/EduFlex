import { expect, test } from "@playwright/test";

test.describe("WBS 4.1: Neon Object Storage & Cloudflare R2 Nightly Backup", () => {
  test("Student can upload a file to object storage and non-admin cannot trigger R2 backups", async ({ page }) => {
    // 1. Unauthenticated cron/backup trigger is blocked
    const unauthRes = await page.request.post("/api/cron/nightly-backup");
    expect(unauthRes.status()).toBe(403);

    // 2. Log in as student
    await page.goto("/login");
    await page.getByLabel("Email address").fill("20030988@eduflex.richv.win");
    await page.locator('input[type="password"]').fill("student123");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/student$/, { timeout: 15000 });

    // 3. Upload a file via /api/submissions/upload (wired to object-storage.ts)
    const uploadRes = await page.request.post("/api/submissions/upload", {
      multipart: {
        file: {
          name: "week4-object-storage-check.txt",
          mimeType: "text/plain",
          buffer: Buffer.from("EduFlex WBS 4.1 Neon Object Storage verification payload", "utf8"),
        },
      },
    });
    expect(uploadRes.status()).toBe(200);
    const uploadJson = await uploadRes.json();
    expect(uploadJson.success).toBe(true);
    expect(uploadJson.storageKey).toContain("week4-object-storage-check.txt");
    expect(uploadJson.sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(["cloudflare-r2", "neon-object-storage", "local-fallback"]).toContain(uploadJson.provider);

    // 4. Student cannot trigger or read R2 backup endpoint
    const studentBackupRes = await page.request.post("/api/cron/nightly-backup");
    expect(studentBackupRes.status()).toBe(403);
  });

  test("Admin can inspect storage config and run Neon DB + file backup to R2", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email address").fill("a.rojit.munankarmi@eduflex.richv.win");
    await page.locator('input[type="password"]').fill("admin123");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/admin$/, { timeout: 15000 });

    const statusRes = await page.request.get("/api/cron/nightly-backup?action=status");
    expect(statusRes.status()).toBe(200);
    const statusJson = await statusRes.json();
    expect(statusJson.success).toBe(true);
    expect(statusJson.config.primaryBucket).toBeTruthy();
    expect(statusJson.config.r2Bucket).toBeTruthy();

    const backupRes = await page.request.post("/api/cron/nightly-backup");
    expect(backupRes.status()).toBe(200);
    const backupJson = await backupRes.json();
    expect(backupJson.success).toBe(true);
    expect(backupJson.dbSnapshotKey).toContain("backups/");
    expect(backupJson.dbSnapshotSha256).toMatch(/^[a-f0-9]{64}$/);
    expect(backupJson.manifestKey).toContain("manifest-");
    expect(backupJson.tableCounts.users).toBeGreaterThan(0);
    expect(backupJson.backedUpFilesCount).toBeGreaterThan(0);
  });
});
