import { combineReducers } from 'redux';

import images from './imageReducer';
import loader from './loadingReducer';
import error from './errorReducer';
import page from './pageReducer';
import stats from './statsReducer';

const rootReducer = combineReducers({
    images,
    error,
    loader,
    page,
    stats,
});

export default rootReducer;
