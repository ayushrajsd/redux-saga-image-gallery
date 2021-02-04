import * as actions from '../actions/actionTypes';

const imageReducer = (state = [], action) => {
    switch (action.type) {
        case actions.IMAGES_LOAD_SUCCESS:
            return state.concat(action.images);
        default:
            return state;
    }
};

export default imageReducer;
