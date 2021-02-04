import * as actions from '../actions/actionTypes';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case actions.IMAGES_LOAD_FAIL:
            return action.error;
        case actions.IMAGES_LOAD:
        case actions.IMAGES_LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducer;
