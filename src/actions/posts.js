import {GET_POSTS} from "../consts";

export const getPosts = items => ({
    type: GET_POSTS,
    payload: items
});
