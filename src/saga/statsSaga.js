import { take, fork, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes';
import { fetchStats } from '../api';
import { loadStats, setStats, setStatsError } from '../actions';

function* handleStatsRequest(id) {
    // console.log('id -> ', id);
    try {
        yield put(loadStats(id));
        const statData = yield call(fetchStats, id);
        yield put(setStats(id, statData.downloads.total));
    } catch (error) {
        yield put(setStatsError(id));
    }
}

export default function* statsSaga() {
    while (true) {
        const { images } = yield take(actions.IMAGES_LOAD_SUCCESS);
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
