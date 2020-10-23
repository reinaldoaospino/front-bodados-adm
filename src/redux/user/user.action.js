import UserActionTypes from './user.types';


export const fechAutenticationStart = () =>({
    type: UserActionTypes.FETCH_AUTENTICATION_START
})

export const fetUserSuccess = (user) =>({
    type: UserActionTypes.FETCH_AUTENTICATION_SUCCESS,
    payload: user
})

export const fetUserFailure = (errorMessage) =>({
    type: UserActionTypes.FETCH_AUTENTICATION_FAILURE,
    payload: errorMessage
})