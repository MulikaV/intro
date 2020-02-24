import {error, success} from 'redux-saga-requests';
import {ADD_POST, DELETE_POST,  GET_POSTS, UPDATE_POST} from "../posts/actions";

const initialState = {
    posts: [],
    isFetching: false,
    error: null
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

        case error(GET_POSTS):
            return {
                ...state,
                error: action.error.message
            };

        case error(ADD_POST):
        case error(DELETE_POST):
        case error(UPDATE_POST):
            return{
                ...state,
                error: action.error.response.statusText
            };

        default:
            return state
    }
};

