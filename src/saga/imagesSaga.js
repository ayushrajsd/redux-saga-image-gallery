import { takeEvery, select, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';

const getPage = state => state.page;

function* handleImageSaga() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        //dispatch error
        yield put(setError(error.toString()));
    }
}

export default function* imageSaga() {
    yield takeEvery(actions.IMAGES_LOAD, handleImageSaga);
}
