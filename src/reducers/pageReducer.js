import * as actions from '../actions/actionTypes';

const pageReducer = (state = 1, action) => {
    if (action.type == actions.IMAGES_LOAD_SUCCESS) {
        return state + 1;
    }
    return state;
};

export default pageReducer;
