import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/auth/actions";
import LoginForm from "../components/Auth/LoginForm";
import Error from "../components/Error";


const LoginFormContainer = () =>{

    const dispatch = useDispatch();
    const error = useSelector(store => store.auth.error);

    const loginData = (data) =>{
        dispatch(login(data.email, data.password,data.remember_me));
    };

    return <div>
        <Error error={error}/>
        < LoginForm onSubmit={loginData} />
        </div>



};

export default LoginFormContainer;