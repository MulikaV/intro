import {postApi} from "../api/api";
import {getPosts} from "../actions/posts";

export const getAllPosts = () => async (dispatch) => {
    const data = await postApi.getPosts();
    debugger;
    if (data) {
        dispatch(getPosts(data));
    }
};

export const addPost = (text) => async (dispatch) => {
    const data = await postApi.addPost(text);
    if (data) {
        dispatch(getAllPosts());
    }
};

export const deletePost = (id) => async (dispatch) => {
    const data = await postApi.deletePost(id);
    if (data) {
        dispatch(getAllPosts());
    }
};