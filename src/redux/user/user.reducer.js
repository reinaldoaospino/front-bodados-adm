import UserActionTypes from './user.types';

const INITIAL_STATE = {
    isFetching: false,
    errorMessage: undefined,
    isCorrectUser: false
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
                isFetching: false
            }
        case UserActionTypes.FETCH_AUTENTICATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;