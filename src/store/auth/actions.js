import {setError} from "../errors/actions";

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


const baseUrl = 'http://127.0.0.1:8000/api';

export const register = (username, email, password, password_confirmation, history) => async dispatch => {

    const data = await dispatch({
        type: REGISTER,
        request: {
            url: `${baseUrl}/register`,
            data: {username, email, password, password_confirmation},
            method: 'post',
        }
    })
        .catch(e => {
            dispatch(setError(e.error.response.data.message))
        });
    if (data) {
        localStorage.setItem('api_token', data.data.token);
        history.push('/');
    }
};

export const login = (email, password, history) => async dispatch => {

    const data = await dispatch({
        type: LOGIN,
        request: {
            url: `${baseUrl}/login`,
            data: {email, password},
            method: 'post'
        }
    }).catch(e => {
        dispatch(setError(e.error.response.data.message))
    });

    if (data) {
        localStorage.setItem('api_token', data.data.token);
        history.push('/');
    }

};
export const logout = () => async dispatch => {
    const data = await dispatch({
        type: LOGOUT,
        request: {
            url: `${baseUrl}/logout`,
            method: 'post'
        }
    }).catch(e => {
        dispatch(setError(e.error.response.data.message))
    });

    if (data) {
        localStorage.setItem('api_token', data.data.token);
    }
};








