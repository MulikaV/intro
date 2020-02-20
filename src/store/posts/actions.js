export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

/*axios.defaults.baseURL = 'https://5e4aae066eafb7001488c7c7.mockapi.io';*/
const baseUrl = 'https://5e4aae066eafb7001488c7c7.mockapi.io';

export const getAllPosts = () => ({
    type: GET_POSTS,
    request: {
        url: `${baseUrl}/posts?sortBy=id&order=desc`
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




