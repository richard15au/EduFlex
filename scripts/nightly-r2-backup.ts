import { runNightlyR2Backup } from "../src/lib/backup-runner";

async function main() {
  console.log("[EduFlex Nightly Backup] Starting Neon PostgreSQL + Object Storage backup to Cloudflare R2...");
  const result = await runNightlyR2Backup();

  if (!result.success) {
    console.error("[EduFlex Nightly Backup] FAILED:", result.error);
    process.exit(1);
  }

  console.log(`[EduFlex Nightly Backup] SUCCESS in ${result.durationMs}ms`);
  console.log(`  R2 Provider:       ${result.r2Provider}`);
  console.log(`  DB Snapshot Key:   ${result.dbSnapshotKey} (${result.dbSnapshotSizeBytes} bytes)`);
  console.log(`  DB SHA-256:        ${result.dbSnapshotSha256}`);
  console.log(`  pg_dump Included:  ${result.pgDumpIncluded ? result.pgDumpKey : "No (logical snapshot used)"}`);
  console.log(`  Files Backed Up:   ${result.backedUpFilesCount}`);
  console.log(`  Manifest Key:      ${result.manifestKey}`);
  console.log("  Table Row Counts: ", JSON.stringify(result.tableCounts));
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("[EduFlex Nightly Backup] Unhandled error:", err);
    process.exit(1);
  });
