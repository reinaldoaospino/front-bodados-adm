import { createSelector } from 'reselect';


const selectUser = state => state.user;

export const selectIsCorrectUser = createSelector(
    [selectUser],
    user => user.isCorrectUser
)

export const selectAuthenticationDenied = createSelector(
    [selectUser],
    user => user.accessDenied
)