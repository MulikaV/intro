import { success } from 'redux-saga-requests';
import {ADD_POST, DELETE_POST, GET_POSTS} from "../actions/posts";

const initialState = {
    posts: [],
    isFetching: false
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
                isFetching: false
            };

        case success(ADD_POST):
            return {
                ...state,
                posts: [action.data, ...state.posts]
            };

            case success(DELETE_POST):
            return {
                ...state,
                posts: state.posts.filter( el => el.id !== action.data.id )
            };

        default:
            return state
    }
};

