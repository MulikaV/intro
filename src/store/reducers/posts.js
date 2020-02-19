import { success } from 'redux-saga-requests';
import {GET_POSTS} from '../constants';

const initialState = {
    posts: [],
    isfetching: false
};

export default (state = initialState,  action)=> {
    switch (action.type) {

        case GET_POSTS:
            return {
                ...state,
                isfetching: true
            };
        case success(GET_POSTS):
            return {
                ...state,
                posts: action.data,
                isfetching: false
            };
        default:
            return state
    }
};

