import React from "react";
import {useDispatch} from "react-redux";
import {login} from "../../store/auth/auth-actions";
import {useHistory} from "react-router";
import {Field, Form, Formik} from "formik";
import {MyField} from "../FormControls";
import * as yup from "yup";
import {useAlert} from "react-alert";

const schema = yup.object({
    email: yup
        .string()
        .required('Please Enter your Email'),
    password: yup
        .string()
        .required('Please Enter your password'),
});

const initialValues = {
    email: "",
    password: ""
};

const LoginForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const alert = useAlert();

    return <div className="container bg-light pt-5 pb-5">
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(data) => {
                dispatch(login(data))
                    .then(data => {
                        localStorage.setItem('api_token', data.data.token);
                        history.push('/')
                    })
                    .catch(e =>
                        alert.error(e.error.response.data.message));
            }}>
            {({errors, touched}) => (
                <Form>
                    <Field
                        type="email"
                        name="email"
                        label="Email"
                        errors={errors}
                        touched={touched}
                        as={MyField}
                    />
                    <Field
                        type="password"
                        name="password"
                        label="Password"
                        as={MyField}
                    />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary"> Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
};
export default LoginForm;