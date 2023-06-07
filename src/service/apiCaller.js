import http from "./http";
const apiEndpoints = {
  auth: {
    signup: "/auth/signup",
    login: "/auth/login",
    logout: "/auth/logout",
    verifyEmail: '/auth/verification-email',
    confirmEmail: '/confirm-email',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    changePassword: '/auth/change-password',
    validateResetPassword: '/auth/validate-reset-password',
    refreshSession: '/auth/refresh-session',
  },
};
const { auth } = apiEndpoints;
export const signup = (payload) => http.post(auth.signup, payload);
export const login = (payload) => http.post(auth.login, payload);
export const logout = (payload) => http.get(auth.logout, payload);
export const verifyEmail = (payload) => http.pot(auth.verifyEmail, payload);
export const confirmEmail = (payload) => http.pot(auth.confirmEmail, payload);
export const forgotPassword = (payload) => http.pot(auth.forgotPassword, payload);
export const resetPassword = (payload) => http.pot(auth.resetPassword, payload);
export const changePassword = (payload) => http.pot(auth.changePassword, payload);
export const validateResetPassword = (payload) => http.pot(auth.validateResetPassword, payload);
export const refreshSession = (payload) => http.pot(auth.refreshSession, payload);