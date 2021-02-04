import * as actions from '../actions/actionTypes';

const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.STATS_LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    error: false,
                    stats: null,
                },
            };
        case actions.STATS_LOAD_SUCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    error: false,
                    stats: action.stats,
                },
            };
        case actions.STATS_LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    error: action.error,
                    stats: null,
                    isLoading: false,
                },
            };
        default:
            return state;
    }
};

export default statsReducer;
