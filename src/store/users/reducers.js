import {SET_USER_DATA} from "./actions";


const initialState = {
    user: []
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload
            };

        default :
            return {
                ...state
            }
    }
};

export default usersReducer;