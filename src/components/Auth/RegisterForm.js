import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../FormControls";
import {minLength6, required} from "../../helpers/validators";

let LoginForm = ({handleSubmit}) => {



    return <form onSubmit={handleSubmit}>

        <Field
            name="name"
            type="text"
            component={renderField}
            validate={required}
            label="Username"
        />
        <Field
            name="email"
            type="email"
            component={renderField}
            validate={required}
            label="Email"
        />
        <Field
            name="password"
            type="password"
            component={renderField}
            validate={[required,minLength6]}
                        label="Password"
        />

        <div className="text-center">
            <button type="submit" className="btn btn-primary"> Register</button>
        </div>
    </form>
};


LoginForm = reduxForm({form: 'loginForm'})(LoginForm);

export default LoginForm;