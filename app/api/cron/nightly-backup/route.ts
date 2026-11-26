import { NextResponse } from "next/server";
import { getServerSession } from "@/src/actions/auth";
import { runNightlyR2Backup } from "@/src/lib/backup-runner";
import { getStorageConfigStatus, listR2Backups } from "@/src/lib/object-storage";

export const maxDuration = 60;

function isAuthorizedCron(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET?.trim();
  if (!cronSecret) return false;
  const authHeader = request.headers.get("authorization");
  return authHeader === `Bearer ${cronSecret}`;
}

export async function GET(request: Request) {
  const cronAuthorized = isAuthorizedCron(request);
  const session = cronAuthorized ? null : await getServerSession();
  const isAdmin = session?.user?.role === "admin";

  if (!cronAuthorized && !isAdmin) {
    return NextResponse.json({ success: false, error: "Forbidden: Admin or CRON_SECRET required." }, { status: 403 });
  }

  const url = new URL(request.url);
  if (url.searchParams.get("action") === "status" && isAdmin) {
    const config = getStorageConfigStatus();
    const backups = await listR2Backups();
    return NextResponse.json({
      success: true,
      config,
      recentBackups: backups.slice(0, 20),
    });
  }

  const result = await runNightlyR2Backup();
  return NextResponse.json(result, { status: result.success ? 200 : 500 });
}

export async function POST(request: Request) {
  const cronAuthorized = isAuthorizedCron(request);
  const session = cronAuthorized ? null : await getServerSession();
  const isAdmin = session?.user?.role === "admin";

  if (!cronAuthorized && !isAdmin) {
    return NextResponse.json({ success: false, error: "Forbidden: Admin or CRON_SECRET required." }, { status: 403 });
  }

  const result = await runNightlyR2Backup();
  return NextResponse.json(result, { status: result.success ? 200 : 500 });
}
