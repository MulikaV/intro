import {createRequestInstance, watchRequests} from "redux-saga-requests";
import {createDriver} from "redux-saga-requests-axios";
import * as axios from "axios";
/*import {getAllPosts} from "../actions/posts";
import {all,put, takeLatest} from "redux-saga/effects";*/

/*
function* fetchAllPosts() {
    yield put(getAllPosts());
}
*/

export default function* rootSaga() {
    yield createRequestInstance({
        driver: createDriver(
            axios.create({
                baseURL: 'https://5e4aae066eafb7001488c7c7.mockapi.io'
            }),
        )
    });

    yield watchRequests();

   /* yield all([
        watchRequests(),
        takeLatest([success('DELETE_POST'), success('ADD_POST')],fetchAllPosts)
        ])*/
}
