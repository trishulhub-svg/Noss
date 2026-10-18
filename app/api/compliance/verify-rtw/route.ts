import { NextResponse } from 'next/server';
import { verifyUkRightToWork as runRtwCheck } from '@/lib/compliance-verification';
import { z } from 'zod';

const rtwSchema = z.object({
  shareCode: z.string().min(9, 'Share code is required'),
  dateOfBirth: z.string().min(8, 'Date of birth is required'),
  candidateId: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = rtwSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid payload', details: validation.error.format() },
        { status: 400 }
      );
    }

    const { shareCode, dateOfBirth } = validation.data;
    const result = runRtwCheck(shareCode, dateOfBirth);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error during Right to Work verification', message: error.message },
      { status: 500 }
    );
  }
}
