import React from "react";


const Error = ({error}) => {
    if (error) {
        return <div className="alert alert-danger mt-5 text-center">{error}</div>
    } else {
        return null
    }
};


export default Error;