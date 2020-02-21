export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_IS_SUCCESS_FALSE = 'SET_IS_SUCCESS_FALSE';

/*axios.defaults.baseURL = 'http://127.0.0.1:8000/api';*/
const baseUrl = 'http://127.0.0.1:8000/api';

export const getAllPosts = () => ({
    type: GET_POSTS,
    request: {
        url: `${baseUrl}/posts?sortBy=created_at&order=desc`
    }
});

export const addPost = text => ({
    type:ADD_POST,
    request:{
        url:`${baseUrl}/posts`,
        data: {text},
        method: 'post'
    }
});

export const deletePost = id => ({
    type:DELETE_POST,
    request:{
        url:`${baseUrl}/posts/${id}`,
        method: 'delete'
    }
});

export const updatePost = (id,text) => ({
    type:UPDATE_POST,
    request:{
        url:`${baseUrl}/posts/${id}`,
        data:{text},
        method: 'put'
    }
});

export const setIsSuccessFalse = () =>({
    type: SET_IS_SUCCESS_FALSE
});





