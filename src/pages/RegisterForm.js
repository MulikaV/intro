import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../store/auth/actions";
import Error from "../components/Error";


const RegisterFormContainer = () =>{

  const dispatch = useDispatch();
    const error = useSelector(store => store.auth.error);

  const registerData = (data) =>{
      dispatch(register(data.name, data.email, data.password));
  };

    return <div>
        <Error error={error}/>
        < RegisterForm onSubmit={registerData} />
    </div>


};

export default RegisterFormContainer;