import React from "react";
import {useSelector} from "react-redux";


const Error = () => {

    const error = useSelector(state =>state.posts.error);
    if (error) {
        return <div className="alert alert-danger mt-5 text-center">{error}</div>
    } else {
        return null
    }
};


export default Error;