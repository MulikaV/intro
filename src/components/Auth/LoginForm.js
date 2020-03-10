import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/auth/actions";
import Error from "../Error";
import {useHistory} from "react-router";
import {Field, Form, Formik} from "formik";
import {MyField} from "../FormControls";
import * as yup from "yup";


const schema = yup.object({
    email: yup
        .string()
        .required('Please Enter your Email'),
    password: yup
        .string()
        .required('Please Enter your password'),
});

const LoginForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector(store => store.errors.error);


    return <div className="container bg-light pt-5 pb-5">
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={schema}
            onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true);
                dispatch(login(data.email, data.password, history));
                setSubmitting(false);
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
        {error && <Error error={error}/>}
    </div>

};

export default LoginForm;