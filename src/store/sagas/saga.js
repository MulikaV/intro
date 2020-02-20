import {createRequestInstance, watchRequests} from "redux-saga-requests";
import {createDriver} from "redux-saga-requests-axios";
import * as axios from "axios";


export default function* rootSaga() {
    yield createRequestInstance({
        driver: createDriver(axios)
    });
    yield watchRequests();
}
