import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/auth/actions";
import Error from "../Error";
import {useHistory} from "react-router";
import {Field, Form, Formik} from "formik";
import {MyField} from "../FormControls";
import {validateEmail, validatePassword} from "../../helpers/validators";


const LoginForm = () =>{

    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector(store => store.errors.error);
return <div className="container bg-light pt-5 pb-5">
    <Formik
    initialValues={{
        email:"",
        password:"",
        remember_me:""
    }}
    onSubmit={(data,{setSubmitting})=>{
        setSubmitting(true);
        dispatch(login(data.email, data.password,data.remember_me,history));
        setSubmitting(false);
    }}>
        {({errors,touched})=>(
            <Form >
                <Field
                type="email"
                name="email"
                label="Email"
                errors={errors}
                touched={touched}
                validate={validateEmail}
                as={MyField}
                />
                <Field
                type="password"
                name="password"
                label="Password"
                validate={validatePassword}
                as={MyField}
                />
                <Field
                type="checkbox"
                name="remember_me"
                label="Remember me"
                as={MyField}
                />
                <div className="text-center">
                    <button type="submit" className="btn btn-primary"> Login</button>
                </div>
            </Form>
        )}
    </Formik>
    {error && <Error error={error}/>}
</div>







   /* const dispatch = useDispatch();
    const error = useSelector(store => store.errors.error);
    const history = useHistory();

    const loginData = (data) =>{
        dispatch(login(data.email, data.password,data.remember_me,history));
    };

    return <div>
        <LoginForm onSubmit={loginData} />
        {error && <Error error={error}/>}
        </div>*/
};

export default LoginForm;