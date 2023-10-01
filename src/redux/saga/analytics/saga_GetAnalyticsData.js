import {call, put, takeEvery, all, fork} from "redux-saga/effects"
import {getAnalyticsData} from "../saga_Requests/api_saga/api_analytics";
import {set_analytics} from "../../store/slices/slice_Analytics";

export const GET_ANALYTICS_DATA = "GET_ANALYTICS_DATA"

function* workerAnalyticsData(payload) {
    const data = yield call(getAnalyticsData, payload.data.group_id)
    console.log(data)
    yield put(set_analytics(data))
}

function* watcherGetAnalyticsData() {
    yield takeEvery(GET_ANALYTICS_DATA, workerAnalyticsData);
}

export function* get_analytics_data() {
    yield all([
        fork(watcherGetAnalyticsData)
    ])
}