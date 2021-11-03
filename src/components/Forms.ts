import * as yup from 'yup';

export type FormError = string | null;
export const PasswordRules = {
    minLength: 8,
};

export const Schemas = {
    email: yup.string().email('Please enter a valid email').required(),
    password: yup
        .string()
        .required('A password is required')
        .min(PasswordRules.minLength, `Must be at least ${PasswordRules.minLength} characters`),
    // passwordConfirm: string()
    //     .required('Please confirm your password')
    //     .oneOf([ref('password')], "Passwords don't match"),
};
