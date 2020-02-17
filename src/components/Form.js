import React from "react";
import {Field, reduxForm} from "redux-form";

let Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field
                    component="textarea"
                    type="text"
                    name="message"
                    placeholder="Start messaging here"
                    className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary"> Send</button>
        </form>
    )
};

export default Form = reduxForm({form: 'form'})(Form);