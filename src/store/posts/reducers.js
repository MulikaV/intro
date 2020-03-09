import {success} from 'redux-saga-requests';
import {GET_POSTS} from "../posts/actions";
import {DELETE_ALL_POST} from "./actions";

const initialState = {
    posts: [],
    total:0,
    currentPage: 0,


};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {


        case success(GET_POSTS):
            return {
                ...state,
                posts:[ ...state.posts, ...action.data.data],
                total:action.data.total,
                currentPage: action.data.current_page
            };

        case DELETE_ALL_POST:
            return{
                ...state,
                posts:[]
            };

        default:
            return state
    }
};

export default postsReducer;