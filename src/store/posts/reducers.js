import { success } from 'redux-saga-requests';
import {ADD_POST, DELETE_POST, GET_POSTS} from "../posts/actions";

const initialState = {
    posts: [],
    isFetching: false,
    isSuccess: false
};

export default (state = initialState,  action)=> {
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
                isFetching: false,
                isSuccess: false
            };

        case success(ADD_POST):
            return {
                ...state,
                isSuccess: true
            };

        case success(DELETE_POST):
            return {
                ...state,
                isSuccess: true
            };

        default:
            return state
    }
};

