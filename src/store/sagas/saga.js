import {createRequestInstance, watchRequests} from "redux-saga-requests";
import {createDriver} from "redux-saga-requests-axios";
import axios from "axios";


axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export default function*  rootSaga() {
     yield  createRequestInstance({
        driver: createDriver(axios)
    });
    yield watchRequests();
}
