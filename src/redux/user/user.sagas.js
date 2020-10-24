import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { fetUserFailure, fetUserSuccess, fetUserDenied } from './user.action'
import { AutenticateUser } from '../../services/user/user-service';

export function* fetAutenticationAsync({ payload }) {
    try {

        var isCorrectUser = yield AutenticateUser(payload)

        if (isCorrectUser) {
            yield put(fetUserSuccess(isCorrectUser));
        } else {
            yield put(fetUserDenied())
        }

    } catch (error) {
        yield put(fetUserFailure(error))
    }
}


export function* fetchAutenticationStart() {
    yield takeLatest(UserActionTypes.FETCH_AUTENTICATION_START, fetAutenticationAsync)
}

export function* userSagas() {
    yield all([call(fetchAutenticationStart)])
}