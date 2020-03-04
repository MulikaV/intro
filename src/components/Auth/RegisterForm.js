import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../store/auth/actions";
import Error from "../Error";
import {useHistory} from "react-router";
import {Field, Form, Formik} from "formik";
import {validateEmail, validatePassword} from "../../helpers/validators";
import {MyField} from "../FormControls";


const RegisterFormContainer = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector(store => store.errors.error);


    return <div className="container bg-light pt-5 pb-5">
        <Formik
            initialValues={{
                email:"",
                name:"",
                password:"",
                password_confirmation:""
            }}
            onSubmit={(data,{setSubmitting})=>{
                setSubmitting(true);
                dispatch(register(data.name, data.email, data.password, data.password_confirmation, history));
                setSubmitting(false);
            }}>
            {({errors,touched})=>(
                <Form >
                    <Field
                        type="text"
                        name="name"
                        label="Username"
                        errors={errors}
                        touched={touched}
                        as={MyField}
                    />
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
                        type="password"
                        name="password_confirmation"
                        label="Password Confirmation"
                        validate={validatePassword}
                        as={MyField}
                    />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary"> Sign Up</button>
                    </div>
                </Form>
            )}
        </Formik>
        {error && <Error error={error}/>}
    </div>




















   /* const registerData = (data) => {
        dispatch(register(data.name, data.email, data.password, data.password_confirmation, history));
    };

    return <div>
        {error && <Error error={error}/>}
        <RegisterForm onSubmit={registerData}/>
    </div>*/
};

export default RegisterFormContainer;