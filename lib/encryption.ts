import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const KEY_LENGTH = 32; // 256 bits
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;

// In production, process.env.ENCRYPTION_MASTER_KEY must be a 64-character hex string (32 bytes)
// Fallback key provided for demonstration & development security
const DEFAULT_MASTER_KEY = 'a3f8c9b2e1d4f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2';

function getMasterKey(): Buffer {
  const secret = process.env.ENCRYPTION_MASTER_KEY || DEFAULT_MASTER_KEY;
  return Buffer.from(secret, 'hex');
}

export interface EncryptedPayload {
  encryptedData: string; // base64
  iv: string;            // base64
  authTag: string;       // base64
}

/**
 * Encrypts sensitive document buffers or text strings using AES-256-GCM.
 */
export function encryptData(plaintext: string | Buffer): EncryptedPayload {
  const key = getMasterKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  const bufferInput = Buffer.isBuffer(plaintext) ? plaintext : Buffer.from(plaintext, 'utf8');
  const encrypted = Buffer.concat([cipher.update(bufferInput), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return {
    encryptedData: encrypted.toString('base64'),
    iv: iv.toString('base64'),
    authTag: authTag.toString('base64'),
  };
}

/**
 * Decrypts encrypted payload back to plaintext string.
 */
export function decryptData(payload: EncryptedPayload): string {
  const key = getMasterKey();
  const iv = Buffer.from(payload.iv, 'base64');
  const authTag = Buffer.from(payload.authTag, 'base64');
  const encryptedText = Buffer.from(payload.encryptedData, 'base64');

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
  return decrypted.toString('utf8');
}

/**
 * Generates a cryptographically signed secure URL with a 15-minute expiration timer (GDPR / Home Office compliance).
 */
export function generateSignedDocumentUrl(documentId: string, candidateId: string, expiresInMinutes = 15): { url: string; expiresAt: number } {
  const expiresAt = Date.now() + expiresInMinutes * 60 * 1000;
  const payloadString = `${documentId}:${candidateId}:${expiresAt}`;
  const signature = crypto.createHmac('sha256', getMasterKey()).update(payloadString).digest('hex');

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://noss-recruitment.co.uk';
  const url = `${baseUrl}/api/compliance/documents/download?doc=${documentId}&candidate=${candidateId}&expires=${expiresAt}&sig=${signature}`;

  return { url, expiresAt };
}

/**
 * Verifies a signed document download URL signature and expiration timer.
 */
export function verifySignedDocumentUrl(documentId: string, candidateId: string, expires: string, sig: string): boolean {
  const expiresAt = parseInt(expires, 10);
  if (isNaN(expiresAt) || Date.now() > expiresAt) {
    return false; // Expired
  }

  const payloadString = `${documentId}:${candidateId}:${expiresAt}`;
  const expectedSig = crypto.createHmac('sha256', getMasterKey()).update(payloadString).digest('hex');

  return crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expectedSig, 'hex'));
}

/**
 * Calculates GDPR 90-day retention expiry date for unselected candidate documents.
 */
export function calculateRetentionExpiry(fromDate = new Date(), days = 90): Date {
  const expiry = new Date(fromDate);
  expiry.setDate(expiry.getDate() + days);
  return expiry;
}
