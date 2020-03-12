import {error} from 'redux-saga-requests';
import {DELETE_ERROR} from "./error-actions";
import {ADD_POST, DELETE_POST, GET_POSTS, UPDATE_POST} from "../posts/post-actions";
import {LOGIN, LOGOUT, REGISTER} from "../auth/auth-actions";


const initialState = {
    error: []
};

const errorsReducer = (state = initialState, action) => {

    switch (action.type) {

        case error(ADD_POST):
        case error(UPDATE_POST):
        case error(DELETE_POST):
        case error(GET_POSTS):
        case error(LOGIN):
        case error(REGISTER):
        case error(LOGOUT):
            return {
                ...state,
                error: action.error.response.data.message
            };

        case DELETE_ERROR:
            return {
                ...state,
                error: []
            };
        default:
            return {
                ...state
            }
    }
};

export default errorsReducer;