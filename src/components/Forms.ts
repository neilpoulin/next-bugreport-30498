import * as Yup from 'yup';

export type FormError = string | null;
export const PasswordRules = {
    minLength: 8,
};

export const Schemas = {
    email: Yup.string().email('Please enter a valid email address').required('An email is required'),
    password: Yup.string()
        .required('A password is required')
        .min(PasswordRules.minLength, `Must be at least ${PasswordRules.minLength} characters`),
    passwordConfirm: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password')], "Passwords don't match"),
};
