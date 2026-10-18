import { NextResponse } from 'next/server';
import { verifyUkDbsCertificate } from '@/lib/compliance-verification';
import { z } from 'zod';

const dbsSchema = z.object({
  certificateNumber: z.string().min(12, 'DBS certificate number must be 12 digits'),
  applicantFullName: z.string().min(2, 'Full applicant name is required'),
  candidateId: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = dbsSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid payload', details: validation.error.format() },
        { status: 400 }
      );
    }

    const { certificateNumber, applicantFullName } = validation.data;
    const result = verifyUkDbsCertificate(certificateNumber, applicantFullName);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error during DBS verification', message: error.message },
      { status: 500 }
    );
  }
}
