import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../FormControls";
import {required} from "../../helpers/validators";

let LoginForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit} >
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
            validate={required}
            label="Password"
        />
        <Field
            name="remember_me"
            type="checkbox"
            component={renderField}
            label="Remember Me"
        />
        <div className="text-center">
            <button type="submit" className="btn btn-primary"> Login</button>
        </div>
    </form>
};


LoginForm = reduxForm({form: 'loginForm'})(LoginForm);

export default LoginForm;