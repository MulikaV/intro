import {success} from 'redux-saga-requests';
import {ADD_POST, DELETE_POST, GET_POSTS, UPDATE_POST} from "../posts/actions";
import {SET_IS_SUCCESS_FALSE} from "./actions";

const initialState = {
    posts: [],
    isFetching: false,
    isSuccess: true,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_POSTS:
            return {
                ...state,
                isFetching: true
            };
        case success(GET_POSTS):
            return {
                ...state,
                posts: action.data,
                isFetching: false
            };

        case success(ADD_POST):
            return {
                ...state,
                isSuccess: true
            };

        case success(UPDATE_POST):
            return {
                ...state,
                isSuccess: true
            };

        case success(DELETE_POST):
            return {
                ...state,
                isSuccess: true
            };

        case SET_IS_SUCCESS_FALSE:
            return {
                ...state,
                isSuccess: false
            };


        default:
            return state
    }
};

