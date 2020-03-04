import {DELETE_ERROR, SET_ERROR} from "./actions";


const initialState = {
    error: null
};

const errorsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_ERROR:

            return {
                ...state,
                error: action.error
            };

        case DELETE_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return {
                ...state
            }
    }
};

export default errorsReducer;