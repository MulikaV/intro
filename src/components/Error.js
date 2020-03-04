import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {deleteError} from "../store/errors/actions";


const Error = ({error}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(deleteError())
        }, 3000)
    }, [dispatch]);


    return <div>
        <div className="alert alert-danger mt-5 text-center">{error}</div>
    </div>

};

export default Error;