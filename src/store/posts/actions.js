import {setError} from "../errors/actions";
import * as axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_ALL_POST = 'DELETE_ALL_POST';

const baseUrl = 'http://127.0.0.1:8000/api';


axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('api_token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


export const getAllPosts = (page) => ({
    type: GET_POSTS,
    request: {
        url: `${baseUrl}/posts?page=${page}`
    }
});


export const addPost = (body) =>
    async dispatch => {
        const data = await dispatch({
                type: ADD_POST,
                request: {
                    url: `${baseUrl}/posts`,
                    data: {body},
                    method: 'post'
                }
            }
        ).catch(e => {

            dispatch(setError(e.error.response.data.message))
        });

        if (data && data.response.status === 201) {
            dispatch(deleteAllPosts());
            dispatch(getAllPosts(1));
        }
    }
;

export const deletePost = id =>
    async dispatch => {
        const data = await dispatch({
            type: DELETE_POST,
            request: {
                url: `${baseUrl}/posts/${id}`,
                method: 'delete'
            }
        }).catch(e => {
            dispatch(setError(e.error.response.data.message))
        });

        if (data && data.response.status === 200) {
            dispatch(deleteAllPosts());
            dispatch(getAllPosts(1));
        }
    };

export const updatePost = (id, body) =>
    async dispatch => {
        const data = await dispatch({
            type: UPDATE_POST,
            request: {
                url: `${baseUrl}/posts/${id}`,
                data: {body},
                method: 'put'
            }
        }).catch(e => {
            dispatch(setError(e.error.response.data.message))
        });

        if (data && data.response.status === 201) {
            dispatch(deleteAllPosts());
            dispatch(getAllPosts(1));
        }
    };

export const deleteAllPosts = () => ({
    type: DELETE_ALL_POST
});


