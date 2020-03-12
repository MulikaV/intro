import React from "react";
import {Textarea} from "./FormControls";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addPost, deleteAndGetAllPosts} from "../store/posts/post-actions";
import * as yup from "yup";
import {useAlert} from "react-alert";


const schema = yup.object({
    body: yup
        .string()
        .required('Please enter your message')
});

const initialValues = {
    body: ""
};

const InputForm = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(data, {resetForm}) => {
                dispatch(addPost(data.body))
                    .then(dispatch(deleteAndGetAllPosts()))
                    .catch(e =>
                        alert.error(e.error.response.data.message));
                resetForm({});
            }}>
            {({errors, touched, isSubmitting}) => (
                <Form>
                    <Field
                        name="body"
                        errors={errors}
                        touched={touched}
                        as={Textarea}
                    />

                    <div className="text-right mt-3">
                        <button disabled={isSubmitting} type="submit" className="btn btn-primary"> Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default InputForm;

