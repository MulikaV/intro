import React from "react";
import {required} from "../../helpers/validators";
import {Textarea} from "../FormControls";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addPost} from "../../store/posts/actions";

let InputForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                text:""
            }}
            onSubmit={(data,{setSubmitting})=>{
                setSubmitting(true);
                dispatch(addPost(data.text));
                setSubmitting(false);
            }}>
            {({errors,touched,isSubmitting})=>(
                <Form >
                    <Field
                        name="text"
                        errors={errors}
                        touched={touched}
                        validate={required}
                        as={Textarea}
                    />

                    <div className="text-right mt-3">
                        <button disabled={isSubmitting} type="submit" className="btn btn-primary"> Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default InputForm ;

