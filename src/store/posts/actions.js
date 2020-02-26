export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const SET_ERROR = 'SET_ERROR';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

/*axios.defaults.baseURL = 'http://127.0.0.1:8000/api';*/
const baseUrl = 'http://127.0.0.1:8000/api';

export const getAllPosts = () => ({
    type: GET_POSTS,
    request: {
        url: `${baseUrl}/posts?sortBy=created_at`
    }
});

export const addPost = text =>
    async dispatch => {
        const data = await dispatch({
                type: ADD_POST,
                request: {
                    url: `${baseUrl}/posts`,
                    data: {text},
                    method: 'post'
                }
            }
        ).catch(e => {
            dispatch(setError(e.error.response.statusText))
        });

        if (data && data.response.status === 200) {
            dispatch(getAllPosts());
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
             dispatch(setError(e.error.response.statusText))
        });

        if (data && data.response.status === 200) {
            dispatch(getAllPosts());
        }
    };

export const updatePost = (id, text) =>
    async dispatch => {
      const data =   await dispatch({
            type: UPDATE_POST,
            request: {
                url: `${baseUrl}/posts/${id}`,
                data: {text},
                method: 'put'
            }
        }).catch(e => {
            dispatch(setError(e.error.response.statusText))
        });

        if (data && data.response.status === 200) {
            dispatch(getAllPosts());
        }
    };

const setError = (error) => ({
    type: SET_ERROR,
    error
});


