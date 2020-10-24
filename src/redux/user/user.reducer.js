import UserActionTypes from './user.types';

const INITIAL_STATE = {
    isFetching: false,
    errorMessage: undefined,
    isCorrectUser: false,
    accessDenied: false
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_AUTENTICATION_START:
            return {
                ...state,
                isFetching: true
            }
        case UserActionTypes.FETCH_AUTENTICATION_SUCCESS:
            return {
                ...state,
                isCorrectUser: action.payload,
                isFetching: false,
                accessDenied: undefined
            }
        case UserActionTypes.FETCH_AUTENTICATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case UserActionTypes.FETCH_AUTENTICATION_DENIED:
            return {
                ...state,
                isFetching: false,
                accessDenied: true
            }

        default:
            return state;
    }
}

export default userReducer;