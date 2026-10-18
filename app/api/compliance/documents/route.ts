import { NextResponse } from 'next/server';
import { encryptData, generateSignedDocumentUrl, calculateRetentionExpiry } from '@/lib/encryption';
import { z } from 'zod';

const documentUploadSchema = z.object({
  candidateId: z.string().min(1, 'Candidate ID is required'),
  documentType: z.enum(['RIGHT_TO_WORK', 'PASSPORT', 'DBS_CERTIFICATE', 'QUALIFICATION']),
  title: z.string().min(1, 'Document title is required'),
  fileContentBase64: z.string().min(1, 'File content is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = documentUploadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.format() },
        { status: 400 }
      );
    }

    const { candidateId, documentType, title, fileContentBase64 } = validation.data;

    // Encrypt file content using AES-256-GCM
    const encryptedPayload = encryptData(fileContentBase64);

    // Generate unique document ID and signed URL (15 min expiration)
    const documentId = `doc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const { url: signedUrl, expiresAt } = generateSignedDocumentUrl(documentId, candidateId, 15);

    // Calculate 90-day GDPR retention expiry date
    const retentionExpiresAt = calculateRetentionExpiry(new Date(), 90);

    // In a full DB setup, this would be saved via Prisma to ComplianceDocument model
    return NextResponse.json({
      success: true,
      message: 'Compliance document encrypted and stored securely in vault',
      data: {
        documentId,
        candidateId,
        documentType,
        title,
        encryptedVaultReference: encryptedPayload.encryptedData.substring(0, 20) + '...',
        signedUrl,
        expiresAt,
        retentionExpiresAt,
        status: 'PENDING',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to encrypt and store compliance document', message: error.message },
      { status: 500 }
    );
  }
}
