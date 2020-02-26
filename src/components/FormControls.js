import React from "react";
import styles from "../styles/formControls.module.css"


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea   {...input} {...props}
                       className={"form-control " + (hasError ? styles.invalid : "")}/>
            </div>
            {hasError &&
            <div className={styles.invalidTooltip}>{meta.error}</div>}
        </div>
    )
};


export const renderField = ({input, type, label,meta}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className="form-group row text-center">
            <label className="col-sm-2 offset-3 col-form-label"> {label}</label>
            <div className="">
                <input {...input} type={type} placeholder={label} className={"form-control "+ ( hasError ? styles.invalid : "")}/>
            </div>

            { hasError &&
            <div className={styles.invalidTooltip}>{meta.error}</div>}
        </div>
    )
};