import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const SCRYPT_ALGO = "scrypt";
const SCRYPT_N = 16384;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const SCRYPT_KEYLEN = 64;
const SEED_SALT_NAMESPACE = "eduflex-dev-seed-salt-v1";

/**
 * Derives a deterministic 16-byte (32-hex-char) salt for a given email address.
 * Used exclusively by `prisma/seed.ts` so repeated seed runs produce identical
 * password hashes for the same demo account without creating churn on upsert.
 */
export function deriveSeedSaltHex(email: string): string {
  const normalized = email.trim().toLowerCase();
  return createHmac("sha256", SEED_SALT_NAMESPACE)
    .update(normalized)
    .digest("hex")
    .slice(0, 32);
}

/**
 * Hashes a plaintext password using Node's standard-library `crypto.scryptSync`.
 * Output format: `scrypt$16384$8$1$<saltHex>$<derivedKeyHex>`
 *
 * @param plainPassword The raw password to hash (never stored in plaintext).
 * @param customSaltHex Optional 32-char hex salt for deterministic seeding; defaults to 16 cryptographically random bytes.
 */
export function hashPassword(plainPassword: string, customSaltHex?: string): string {
  if (!plainPassword) {
    throw new Error("Password must not be empty.");
  }

  const saltHex = customSaltHex ?? randomBytes(16).toString("hex");
  const saltBuffer = Buffer.from(saltHex, "hex");
  const derivedKey = scryptSync(plainPassword, saltBuffer, SCRYPT_KEYLEN, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
  });

  return `${SCRYPT_ALGO}$${SCRYPT_N}$${SCRYPT_R}$${SCRYPT_P}$${saltHex}$${derivedKey.toString("hex")}`;
}

/**
 * Verifies a plaintext password against a stored `scrypt$N$r$p$saltHex$keyHex` hash
 * using constant-time `crypto.timingSafeEqual`.
 */
export function verifyPassword(plainPassword: string, storedHash: string): boolean {
  if (!plainPassword || !storedHash) {
    return false;
  }

  const parts = storedHash.split("$");
  if (parts.length !== 6) {
    return false;
  }

  const [algo, nStr, rStr, pStr, saltHex, expectedKeyHex] = parts;
  if (algo !== SCRYPT_ALGO || !saltHex || !expectedKeyHex) {
    return false;
  }

  const N = Number.parseInt(nStr, 10);
  const r = Number.parseInt(rStr, 10);
  const p = Number.parseInt(pStr, 10);

  if (!Number.isFinite(N) || !Number.isFinite(r) || !Number.isFinite(p)) {
    return false;
  }

  try {
    const saltBuffer = Buffer.from(saltHex, "hex");
    const expectedKeyBuffer = Buffer.from(expectedKeyHex, "hex");
    if (saltBuffer.length === 0 || expectedKeyBuffer.length === 0) {
      return false;
    }

    const derivedKeyBuffer = scryptSync(plainPassword, saltBuffer, expectedKeyBuffer.length, {
      N,
      r,
      p,
    });

    if (derivedKeyBuffer.length !== expectedKeyBuffer.length) {
      return false;
    }

    return timingSafeEqual(derivedKeyBuffer, expectedKeyBuffer);
  } catch {
    return false;
  }
}
