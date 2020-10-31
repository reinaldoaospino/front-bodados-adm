import FetchingActionTypes from './fetching.types';

//Create

export const setIsFetching = (value) => ({
    type: FetchingActionTypes.IS_FETCHING,
    payload: value
})

export const setFetchingSuccess= (value)=>({
    type: FetchingActionTypes.FETCHING_SUCCESS,
    payload: value
})

export const setFetchingComplete= (value)=>({
    type: FetchingActionTypes.FETCHING_COMPLETE,
    payload: value
})