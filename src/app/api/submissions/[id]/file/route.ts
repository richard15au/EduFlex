import { NextResponse } from "next/server";
import path from "path";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "@/src/actions/auth";
import { getObjectFromPrimaryStorage } from "@/src/lib/object-storage";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const submission = await prisma.assignmentSubmission.findUnique({
      where: { id },
      include: {
        student: { select: { id: true, name: true, email: true } },
        assignment: { select: { title: true, course: { select: { code: true, title: true } } } },
      },
    });

    if (!submission) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    const isStaff = session.user.role === "instructor" || session.user.role === "admin";
    const isOwner = submission.studentId === session.user.id;
    if (!isStaff && !isOwner) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const url = new URL(request.url);
    const forceDownload = url.searchParams.get("download") === "1";

    if (submission.storageKey) {
      const storedObj = await getObjectFromPrimaryStorage(submission.storageKey);
      if (storedObj) {
        const safeFileName = path.basename(submission.fileName).replace(/"/g, "");
        return new NextResponse(new Uint8Array(storedObj.bytes), {
          status: 200,
          headers: {
            "Content-Type": submission.mimeType || "application/octet-stream",
            "Content-Disposition": `${forceDownload ? "attachment" : "inline"}; filename="${safeFileName}"`,
            "X-EduFlex-Storage-Provider": storedObj.provider,
            "Cache-Control": "private, max-age=60",
          },
        });
      }
    }

    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(submission.fileName)} — Submission Summary</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; margin: 24px; color: #1f2937; background: #f9fafb; }
    .card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; max-width: 720px; }
    .badge { display: inline-block; background: #eff6ff; color: #1a3a9e; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 999px; }
    h1 { font-size: 18px; margin: 10px 0 4px; }
    .meta { font-size: 13px; color: #4b5563; line-height: 1.6; }
    .notes { margin-top: 16px; padding: 14px; background: #f3f4f6; border-radius: 8px; font-size: 13px; white-space: pre-wrap; }
    .warn { margin-top: 14px; font-size: 12px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; padding: 10px 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">${escapeHtml(submission.assignment.course.code)} · ${escapeHtml(submission.receiptNumber)}</span>
    <h1>${escapeHtml(submission.fileName)}</h1>
    <div class="meta">
      <div><strong>Student:</strong> ${escapeHtml(submission.student.name)} (${escapeHtml(submission.student.email)})</div>
      <div><strong>Assessment:</strong> ${escapeHtml(submission.assignment.title)}</div>
      <div><strong>File Size:</strong> ${escapeHtml(submission.fileSizeLabel)}</div>
      <div><strong>Submitted:</strong> ${escapeHtml(submission.submittedAt.toLocaleString())}</div>
    </div>
    ${submission.comments ? `<div class="notes"><strong>Student Notes / Reflection:</strong>\n\n${escapeHtml(submission.comments)}</div>` : ""}
    <div class="warn">This submission was recorded using metadata/sample attachment before local file storage was enabled. New real file uploads will render or download directly here.</div>
  </div>
</body>
</html>`;

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[GET /api/submissions/[id]/file] Error:", err);
    return NextResponse.json({ error: "Failed to load submission file" }, { status: 500 });
  }
}
