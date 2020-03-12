import React from "react";
import {useDispatch} from "react-redux";
import {register} from "../../store/auth/auth-actions";
import {useHistory} from "react-router";
import {Field, Form, Formik} from "formik";
import {MyField} from "../FormControls";
import * as yup from 'yup';


const schema = yup.object({
    username: yup
        .string()
        .required('Please Enter a username'),
    email: yup
        .string()
        .email('Wrong email format')
        .required('Please Enter your Email'),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            "^.*(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$",
            "Wrong password format"
        ),
    confirmPassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref("password"), null], "Passwords must match")
});

const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
};

const RegisterForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    return <div className="container bg-light pt-5 pb-5">
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(data) => {
                dispatch(register(data))
                    .then(data => {
                        localStorage.setItem('api_token', data.data.token);
                        history.push('/');
                    })
                    .catch(e =>
                        alert.error(e.error.response.data.message));

            }}>
            {({errors, touched}) => (
                <Form>
                    <Field
                        type="text"
                        name="username"
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
                        as={MyField}
                    />
                    <Field
                        type="password"
                        name="password"
                        label="Password"
                        as={MyField}
                    />
                    <Field
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        as={MyField}
                    />
                    <p className="small text-center">*Password must contain at least one uppercase character, one
                        lowercase character and one number</p>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary"> Sign Up</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
};


export default RegisterForm;