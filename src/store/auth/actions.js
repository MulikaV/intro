import {setUserData} from "../users/actions";
import {setError} from "../errors/actions";

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


const baseUrl = 'http://127.0.0.1:8000/api';

export const register = (name, email, password,password_confirmation,history) => async dispatch => {

  await  dispatch({
        type: REGISTER,
        request: {
            url: `${baseUrl}/register`,
            data: {name, email, password,password_confirmation},
            method: 'post',
        }
    })
        .catch(e => {
            dispatch(setError(e.error.response.data.message))
        })
      .then(
        history.push('/login')
      )
};

export const login = (email, password,remember_me,history) => async dispatch => {

   const data = await dispatch({
        type: LOGIN,
        request: {
            url: `${baseUrl}/login`,
            data: {email, password,remember_me},
            method: 'post'
        }
    }).catch(e => {
       dispatch(setError(e.error.response.data.message))
   });

    if (data) {
    localStorage.setItem('api_token',data.data.token);
    dispatch(setUserData(data.data.user));
    history.push('/');
    }

};
export const logout = () => ({
    type: LOGOUT,
    request: {
        url: `${baseUrl}/logout`,
        method: 'post'
    }
});





