export const SET_ERROR= 'SET_ERROR';
export const DELETE_ERROR= 'DELETE_ERROR';

export const setError = (error) => ({
    type: SET_ERROR,
    error
});

export const deleteError = () => ({
    type: DELETE_ERROR
});