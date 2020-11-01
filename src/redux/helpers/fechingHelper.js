import { put } from 'redux-saga/effects';
import { setFetchingComplete, setFetchingSuccess, setIsFetching } from '../fetching/fetching.action';


export function* feching() {
    yield put(setIsFetching(true))
}

export function* fechingComplete() {
    yield put(setFetchingSuccess(true));
    yield put(setFetchingComplete(true));
    yield put(setIsFetching(false));
}

export function* fechingFailure() {
    yield put(setIsFetching(false));
    yield put(setFetchingSuccess(false))
    yield put(setFetchingComplete(true));
}