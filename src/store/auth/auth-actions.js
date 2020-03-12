export const REGISTER = 'REGISTER';
export const register = (userData) => ({
    type: REGISTER,
    request: {
        method: 'POST',
        url: '/register',
        data: {...userData}
    }
});

export const LOGIN = 'LOGIN';
export const login = (userData) => ({
    type: LOGIN,
    request: {
        method: 'POST',
        url: '/login',
        data: {...userData}
    }
});


export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT,
    request: {
        method: 'POST',
        url: '/logout'
    }
});








