// const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const SERVER_URL = "http://b863-101-53-242-135.ngrok.io/api";
export const SERVER_URL_MAIN = "http://18.116.89.176:5000";

export const auth = {
  SIGNUP: `${SERVER_URL}/v1/auth/signup`,
  VERIFY_EMAIL: `${SERVER_URL}/v1/auth/verify/email`,
  LOGIN: `${SERVER_URL}/v1/auth/login`,
  LOGGEDIN_USER: `${SERVER_URL}/v2/user`,
  FORGET_PASSWORD: `${SERVER_URL}/v1/auth/password/forgot`,
  RESET_PASSWORD: `${SERVER_URL}/v1/auth/password/reset`,

  VERIFY_USER: `${SERVER_URL}/v3/auth/verifyuser`,
  FORGET: `${SERVER_URL}/v3/auth/forgot`,
  VERIFY_FORGET: `${SERVER_URL}/v3/auth/verifyforgot`,
  UPDATE_PASSWORD: `${SERVER_URL}/v3/auth/updatepassword`,

  // google 2f verification
  VERIFY_2F_GOOGLE: `${SERVER_URL}/v1/auth/verify2fa`,
  VERIFY_2F_EMAIL: `${SERVER_URL}/v3/auth/verifyEmailSMSVerification`,
  VERIFY_2F_SMS: `${SERVER_URL}/v3/auth/verifySMSVCode`,

  // update profile data
  UPDATE_PROFILE: `${SERVER_URL}/v3`,

  // is_Verificatrion_on
  IS_EMAIL_AUTH_ON: `${SERVER_URL}/v3/auth/updateEmailVerification`,
  IS_SMS_AUTH_ON: `${SERVER_URL}/v3/auth/updateSMSVerification`,
};

export const profile = {
  UPDATE_USER_DETAILS: `${SERVER_URL}/v1/profile/update-user`,
  UPDATE_PASSWORD: `${SERVER_URL}/v1/profile/updatePassword`,
  ENABLE_GOOGLE_AUTH: `${SERVER_URL}/v1/auth/enable2fa`,
  UPDATE_GOOGLE_AUTH_STATUS: `${SERVER_URL}/v1/auth/update2faStatus`,
  LOGGINED_USER_COMPLIANCE_TIER_STATUS: `${SERVER_URL}/v1/compliance/tiers/status`,
};
export const KYC = {
  CREATE_COMPLIANCE_TIER1: `${SERVER_URL}/v1/compliance/tier1_kyc`,
  GET_COMPLIANCE_KYC_TIER1: `${SERVER_URL}/v2/compliance/tier1/kyc_tier1`,
  GET_COMPLIANCE_KYC_TIER2: `${SERVER_URL}/v2/compliance/tier1/kyc_tier2`,
};
export const users = {
  GET_ALL_USERS: `${SERVER_URL}/v2/investors/all`,
};
