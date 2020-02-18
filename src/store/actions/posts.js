import {postApi} from "../../api/api";

const GET_POSTS = 'GET_POSTS';

export const getAllPosts = () => async (dispatch) => {
    const data = await postApi.getPosts();
    if (data) {
        dispatch({
            type: GET_POSTS,
            payload: data
        });
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