import {success} from 'redux-saga-requests';
import {LOGIN, LOGOUT, REGISTER} from "./actions";

const initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case success(LOGIN):
        case success(REGISTER):
            return {
                ...state,
                isAuth: true
            };

        case success(LOGOUT):
            return {
                ...state,
                isAuth: false
            };

        default:
            return state
    }
};

export default authReducer;