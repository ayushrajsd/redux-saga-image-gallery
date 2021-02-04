import * as actions from './actionTypes';

export const loadImages = () => ({
    type: actions.IMAGES_LOAD,
});

export const setImages = images => ({
    type: actions.IMAGES_LOAD_SUCCESS,
    images,
});

export const setError = error => ({
    type: actions.IMAGES_LOAD_FAIL,
    error,
});

export const loadStats = id => ({
    type: actions.STATS_LOAD,
    id,
});

export const setStats = (id, stats) => ({
    type: actions.STATS_LOAD_SUCESS,
    id,
    stats,
});

export const setStatsError = (id, error) => ({
    type: actions.STATS_LOAD_FAIL,
    id,
    error,
});
