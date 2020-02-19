import {createRequestInstance, success, watchRequests} from "redux-saga-requests";
import {createDriver} from "redux-saga-requests-axios";
import * as axios from "axios";

export default function* rootSaga() {
    yield createRequestInstance({
        driver: createDriver(
            axios.create({
                baseURL: 'https://5e4aae066eafb7001488c7c7.mockapi.io'
            }),
        )
    });
    yield watchRequests();
}
