import {reducer as formReducer} from 'redux-form'
import createSagaMiddleware from 'redux-saga';
import posts from "./posts/reducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import rootSaga from "./sagas/saga";
import thunkMiddleware from 'redux-thunk'

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({
            posts,
            form: formReducer
        }),
        applyMiddleware(thunkMiddleware,sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};