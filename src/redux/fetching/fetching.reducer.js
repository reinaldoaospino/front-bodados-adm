import FetchingActionTypes from './fetching.types';

const INITIAL_STATE = {
    isFetching: false,
    fetchingComplete: false,
    fetchingSuccess: false,
}


const FetchingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchingActionTypes.IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case FetchingActionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                fetchingSuccess: action.payload
            }

        case FetchingActionTypes.FETCHING_COMPLETE:
            return {
                ...state,
                fetchingComplete: action.payload
            }

        default:
            return state;
    }
}

export default FetchingReducer;