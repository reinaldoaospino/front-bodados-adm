import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {fetUserFailure,fetUserSuccess}from './user.action'

export function* fetAutenticationAsync({payload}){
    try {
        var user = true;

        yield put(fetUserSuccess(user));

    } catch (error) {
        yield put(fetUserFailure(error))
    }
}


export function * fetchAutenticationStart (){
    yield takeLatest(UserActionTypes.FETCH_AUTENTICATION_START,fetAutenticationAsync)
}

export function * userSagas(){
    yield all([call(fetchAutenticationStart)])
}