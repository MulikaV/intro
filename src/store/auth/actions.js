import {SET_ERROR} from "../posts/actions";

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const baseUrl = 'http://127.0.0.1:8000/api';

export const register = (name, email, password) => dispatch => {

    dispatch({
        type: REGISTER,
        request: {
            url: `${baseUrl}/register`,
            data: {name, email, password},
            method: 'post'
        }
    })
        .catch(e => {
            dispatch(setError(e.error.response.data.message))
        })
};

export const login = (email, password) => async dispatch => {

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

   console.log(data);
/*
    if (data) {

    }
*/

};
export const logout = () => ({
    type: LOGOUT,
    request: {
        url: `${baseUrl}/logout`,
        method: 'post'
    }
});

const setError = (error) => ({
    type: SET_ERROR,
    error
});



