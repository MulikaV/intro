import {success} from 'redux-saga-requests';
import {GET_POSTS} from "../posts/actions";

const initialState = {
    posts: [],
    isFetching: false
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

        default:
            return state
    }
};

