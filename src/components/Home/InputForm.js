import React from "react";
import {Textarea} from "../FormControls";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addPost} from "../../store/posts/actions";
import * as yup from "yup";


let InputForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                body: ""
            }}
            validationSchema={yup.object({
                body: yup
                    .string()
                    .required('Please enter your message'),

            })}
            onSubmit={(data, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                dispatch(addPost(data.body));
                resetForm({});
                setSubmitting(false);
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

