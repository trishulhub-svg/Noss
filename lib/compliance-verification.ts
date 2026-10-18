/**
 * UK Right to Work and DBS Verification Engine
 * Aligned with UK Home Office & Disclosure and Barring Service compliance standards.
 */

export interface RightToWorkVerificationResult {
  isValid: boolean;
  shareCode: string;
  status: 'VERIFIED' | 'INVALID' | 'EXPIRED' | 'PENDING_HOME_OFFICE';
  immigrationStatus?: string;
  expiryDate?: string;
  checkedAt: string;
  statutoryExcuseGranted: boolean;
  notes: string;
}

export interface DbsVerificationResult {
  isValid: boolean;
  certificateNumber: string;
  checkType: 'BASIC' | 'STANDARD' | 'ENHANCED' | 'ENHANCED_BARRED';
  status: 'CLEAR' | 'CONVICTIONS_FOUND' | 'INVALID' | 'EXPIRED';
  issueDate: string;
  applicantNameMatch: boolean;
  checkedAt: string;
  notes: string;
}

/**
 * Validates and simulates UK Home Office Right to Work share code verification.
 * Share codes typically consist of 9 alphanumeric characters (e.g., W12345678, S87654321).
 */
export function verifyUkRightToWork(shareCode: string, dateOfBirth: string): RightToWorkVerificationResult {
  const cleanedCode = shareCode.trim().toUpperCase();
  const rtwRegex = /^[WSX][0-9A-Z]{8}$/;

  const checkedAt = new Date().toISOString();

  if (!rtwRegex.test(cleanedCode)) {
    return {
      isValid: false,
      shareCode: cleanedCode,
      status: 'INVALID',
      checkedAt,
      statutoryExcuseGranted: false,
      notes: 'Invalid UK Right to Work share code format. Must be 9 alphanumeric characters starting with W, S, or X.',
    };
  }

  // Simulated UK Home Office API verification logic
  // In production, this would make an authenticated HTTPS request to UK Visas and Immigration (UKVI) API
  const isMockExpired = cleanedCode.endsWith('999');
  if (isMockExpired) {
    return {
      isValid: false,
      shareCode: cleanedCode,
      status: 'EXPIRED',
      checkedAt,
      statutoryExcuseGranted: false,
      notes: 'Right to Work share code has expired according to Home Office records.',
    };
  }

  return {
    isValid: true,
    shareCode: cleanedCode,
    status: 'VERIFIED',
    immigrationStatus: 'Skilled Worker / Indefinite Leave to Remain',
    expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
    checkedAt,
    statutoryExcuseGranted: true,
    notes: 'Successfully verified against UK Home Office database. Statutory excuse established.',
  };
}

/**
 * Validates and simulates UK Disclosure and Barring Service (DBS) certificate verification.
 * DBS certificate numbers consist of 12 digits.
 */
export function verifyUkDbsCertificate(certificateNumber: string, applicantFullName: string): DbsVerificationResult {
  const cleanedCert = certificateNumber.trim();
  const dbsRegex = /^\d{12}$/;
  const checkedAt = new Date().toISOString();

  if (!dbsRegex.test(cleanedCert)) {
    return {
      isValid: false,
      certificateNumber: cleanedCert,
      checkType: 'ENHANCED',
      status: 'INVALID',
      issueDate: '',
      applicantNameMatch: false,
      checkedAt,
      notes: 'Invalid DBS certificate number format. Must be exactly 12 digits.',
    };
  }

  // Simulated DBS database verification
  const hasConvictions = cleanedCert.startsWith('999');
  if (hasConvictions) {
    return {
      isValid: true,
      certificateNumber: cleanedCert,
      checkType: 'ENHANCED',
      status: 'CONVICTIONS_FOUND',
      issueDate: '2025-01-15',
      applicantNameMatch: true,
      checkedAt,
      notes: 'DBS check completed: Disclosable history/convictions identified. Manual compliance officer review required.',
    };
  }

  return {
    isValid: true,
    certificateNumber: cleanedCert,
    checkType: 'ENHANCED',
    status: 'CLEAR',
    issueDate: '2026-02-10',
    applicantNameMatch: true,
    checkedAt,
    notes: 'Enhanced DBS check verified successfully. No trace / Clear certificate confirmed.',
  };
}
