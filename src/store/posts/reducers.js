import {error, success} from 'redux-saga-requests';
import {GET_POSTS, SET_ERROR} from "../posts/actions";

const initialState = {
    posts: [],
    isFetching: false,
    error: null
};

const postReducer = (state = initialState, action) => {
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

        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };

        default:
            return state
    }
};

export default postReducer;