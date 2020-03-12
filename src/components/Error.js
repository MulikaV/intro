import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteError} from "../store/errors/error-actions";


const Error = () => {
    const dispatch = useDispatch();
    const error = useSelector( store => store.errors.error);

    useEffect(() => {
        error.length > 0 &&
        setTimeout(() => {
            dispatch(deleteError())
        }, 2000)
    }, [dispatch,error]);


    return <div>
        {error.length > 0
            ? <div className="alert alert-danger mt-5 text-center">{error}</div>
            : null
        }
    </div>
};

export default Error;