import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "../styles/form.css"
import {maxLength50, required} from "../helpers/validators";
import {Textarea} from "./FormControls";

let Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <div className="form-group">
                <Field
                    component={Textarea}
                    element={"textarea"}
                    validate={[required,maxLength50]}
                    name="message"
                    placeholder="Start messaging here"
                    />
            </div>
            <div className={style.button}>
                <button type="submit" className="btn btn-primary "> Send</button>
            </div>
        </form>
    )
};

export default Form = reduxForm({form: 'form'})(Form);