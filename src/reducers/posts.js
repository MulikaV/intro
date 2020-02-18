import {GET_POSTS,ADD_POST,DELETE_POST} from "../consts";

const initialState = {
    posts: [],
    isReady: false
};

export default (state = initialState,  action)=> {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                isReady: true
            };

        default:
            return state
    }
};

