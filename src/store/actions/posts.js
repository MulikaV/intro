/*
import {postApi} from "../../api/api";

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
};*/

import {ADD_POST, DELETE_POST, GET_POSTS} from "../constants";

export const getAllPosts = () => ({
    type: GET_POSTS,
    request: {
        url: '/posts'
    }
});

export const addPost = text => ({
    type:ADD_POST,
    request:{
        url:'/posts',
        data: {text},
        method: 'post'
    }
});

export const deletePost = id => ({
    type:DELETE_POST,
    request:{
        url:`/posts/${id}`,
        method: 'delete'
    }
});



