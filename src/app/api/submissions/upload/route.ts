import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import { getServerSession } from "@/src/actions/auth";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB
const ALLOWED_EXTENSIONS = new Set([
  ".pdf",
  ".docx",
  ".doc",
  ".zip",
  ".txt",
  ".md",
  ".png",
  ".jpg",
  ".jpeg",
]);

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ success: false, error: "No file uploaded." }, { status: 400 });
    }

    if (file.size <= 0) {
      return NextResponse.json({ success: false, error: "Uploaded file is empty." }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ success: false, error: "File exceeds 50 MB limit." }, { status: 400 });
    }

    const originalName = path.basename(file.name || "submission.pdf");
    const ext = path.extname(originalName).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      return NextResponse.json(
        { success: false, error: `Unsupported file type (${ext || "unknown"}). Allowed: PDF, DOCX, DOC, ZIP, TXT, PNG, JPG.` },
        { status: 400 }
      );
    }

    const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const storageKey = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}-${safeName}`;
    const uploadDir = path.join(process.cwd(), "storage", "submissions");
    await mkdir(uploadDir, { recursive: true });

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(uploadDir, storageKey), buffer);

    return NextResponse.json({
      success: true,
      storageKey,
      fileName: originalName,
      fileSizeBytes: file.size,
      fileSizeLabel: formatBytes(file.size),
      mimeType: file.type || (ext === ".pdf" ? "application/pdf" : "application/octet-stream"),
    });
  } catch (err) {
    console.error("[POST /api/submissions/upload] Error:", err);
    return NextResponse.json({ success: false, error: "Failed to store uploaded file." }, { status: 500 });
  }
}
