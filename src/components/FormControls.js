import React from "react";
import styles from "../styles/formControls.module.css"


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea   {...input} {...props}
                       className={"form-control" + " " + (hasError ? styles.invalid : "")}/>
            </div>
            {hasError &&
            <div className={styles.invalidTooltip}>{meta.error}</div>}
        </div>
    )
};


