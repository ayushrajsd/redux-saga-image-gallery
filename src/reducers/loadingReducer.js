import * as actions from '../actions/actionTypes';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case actions.IMAGES_LOAD:
            return true;
        case actions.IMAGES_LOAD_SUCCESS:
            return false;
        case actions.IMAGES_LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
