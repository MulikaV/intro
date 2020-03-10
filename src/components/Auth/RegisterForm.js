import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../store/auth/actions";
import Error from "../Error";
import {useHistory} from "react-router";
import {Field, Form, Formik} from "formik";
import {MyField} from "../FormControls";
import * as yup from 'yup';



const schema = yup.object({
    username: yup.string().required('Please Enter a username'),
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




const RegisterForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector(store => store.errors.error);


    return <div className="container bg-light pt-5 pb-5">
        <Formik
            initialValues={{
                email: "",
                name: "",
                password: "",
                password_confirmation: ""
            }}
            validationSchema={schema}
            onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true);
                dispatch(register(data.name, data.email, data.password, data.password_confirmation, history));
                setSubmitting(false);
            }}>
            {({errors, touched}) => (
                <Form>
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
        {error && <Error error={error}/>}
    </div>
};


export default RegisterForm;