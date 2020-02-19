export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

export const getAllPosts = () => ({
    type: GET_POSTS,
    request: {
        url: '/posts?sortBy=id&order=desc'
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



