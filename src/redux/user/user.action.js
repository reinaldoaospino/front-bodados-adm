import UserActionTypes from './user.types';


export const fechAutenticationStart = (userData) =>({
    type: UserActionTypes.FETCH_AUTENTICATION_START,
    payload: userData
})

export const fetUserSuccess = (user) =>({
    type: UserActionTypes.FETCH_AUTENTICATION_SUCCESS,
    payload: user
})

export const fetUserFailure = (errorMessage) =>({
    type: UserActionTypes.FETCH_AUTENTICATION_FAILURE,
    payload: errorMessage
})

export const fetUserDenied = () =>({
    type: UserActionTypes.FETCH_AUTENTICATION_DENIED,
})