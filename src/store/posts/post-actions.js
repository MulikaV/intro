import axios from 'axios';

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

export const GET_POSTS = 'GET_POSTS';
export const getAllPosts = (page) => ({
    type: GET_POSTS,
    request: {
        url: `/posts?page=${page}`
    }
});

export const ADD_POST = 'ADD_POST';
export const addPost = (body) =>
  ({
      type: ADD_POST,
      request: {
          method: 'POST',
          url: '/posts',
          data: {body}
      }
  });

export const DELETE_POST = 'DELETE_POST';
export const deletePost = id =>
    ({
        type: DELETE_POST,
        request: {
            method: 'DELETE',
            url: `/posts/${id}`
        }
    });

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = (id, body) =>
    ({
        type: UPDATE_POST,
        request: {
            method: 'PUT',
            url: `/posts/${id}`,
            data: {body}
        }
    });

export const DELETE_ALL_POST = 'DELETE_ALL_POST';
export const deleteAllPosts = () => ({
    type: DELETE_ALL_POST
});

export const deleteAndGetAllPosts = () => dispatch => {
    dispatch(deleteAllPosts());
    dispatch(getAllPosts(1));
};




