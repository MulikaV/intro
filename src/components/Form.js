import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength50, required} from "../helpers/validators";
import {Textarea} from "./FormControls";

let Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <Field
                    component={Textarea}
                    element={"textarea"}
                    validate={[required,maxLength50]}
                    name="message"
                    placeholder="Start messaging here"
                    />
            </div>
            <div className="text-right">
                <button type="submit" className="btn btn-primary "> Send</button>
            </div>
        </form>
    )
};

export default Form = reduxForm({form: 'form'})(Form);