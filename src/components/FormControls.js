import React from "react";
import styles from "../styles/formControls.module.css"
import {useField} from "formik";


export const Textarea = (props) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea {...field}
                          className={"form-control " + (hasError ? styles.invalid : "")}/>
            </div>
            {hasError &&
            <div className={styles.invalidTooltip}>{meta.error}</div>}
        </div>
    )
};

export const MyField = ({type, label, ...props}) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return <div className="form-group row text-center">
        <label className="col-sm-3 offset-2 col-form-label"> {label}</label>
        <div>
            <input  {...field} placeholder={label} type={type}
                    className={"form-control " + (hasError ? styles.invalid : "")}/>
        </div>
        {hasError &&
        <div className={styles.invalidTooltip}>{meta.error}</div>}
    </div>
};