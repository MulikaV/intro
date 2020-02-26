export const required = value => (value || typeof value === 'string' ? undefined : 'Required');

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const maxLength500 = maxLength(500);
export const minLength6 = minLength(6);
