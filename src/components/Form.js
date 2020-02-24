import React from "react";
import {Field, reset, reduxForm} from "redux-form";
import {maxLength500, required} from "../helpers/validators";
import {Textarea} from "./FormControls";

let Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field
                    component={Textarea}
                    element={"textarea"}
                    validate={[ maxLength500]}
                    name="message"
                    placeholder="Start messaging here"
                />
            </div>
            <div className="text-right">
                <button type="submit"    className="btn btn-primary"> Send</button>
            </div>
        </form>
    )
};

export default Form = reduxForm({
    form: 'form',
    onSubmitSuccess: (result, dispatch) => {
        dispatch(reset('form'));
    }
})(Form);

