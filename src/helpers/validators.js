export const validateEmail = (value)=>{
    let error;
    if (!value) {
        error = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
};

export const validatePassword = (value)=>{
    let error;
    if (!value) {
        error = 'Password is required';
    } else if (!/^.*(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/i.test(value)) {
        error = 'Password must contain at least one uppercase character one lowercase character and one number ';
    }
    return error;
};

export const required =(value) =>{
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
};