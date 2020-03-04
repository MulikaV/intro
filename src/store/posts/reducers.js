import {error, success} from 'redux-saga-requests';
import {GET_POSTS} from "../posts/actions";

const initialState = {
    posts: [],
    isFetching: false
};

const postsReducer = (state = initialState, action) => {
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

        default:
            return state
    }
};

export default postsReducer;