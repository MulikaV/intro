import createSagaMiddleware from 'redux-saga';
import postsReducer from "./posts/reducers";
import authReducer from "./auth/reducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import rootSaga from "./sagas/saga";
import thunkMiddleware from 'redux-thunk'
import {requestsPromiseMiddleware} from "redux-saga-requests";
import usersReducer from "./users/reducers";
import errorsReducer from "./errors/reducers";

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            auth:authReducer,
            errors:errorsReducer,
            users: usersReducer
        }),
        applyMiddleware(requestsPromiseMiddleware({auto:true}),thunkMiddleware,sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};