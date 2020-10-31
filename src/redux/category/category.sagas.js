import { takeLatest, put, all, call } from 'redux-saga/effects';
import { CreateCategory } from '../../services/category/category.service';
import { setFetchingComplete, setFetchingSuccess, setIsFetching } from '../fetching/fetching.action';
import { fetchCreateCategoryFailure } from './category.action';
import CategoryActionTypes from './category.types';




export function* fetchCreateCategoryAsync({ payload }) {
    try {
        yield put(setIsFetching(true));
        yield CreateCategory(payload)
        yield put(setFetchingSuccess(true));
        yield put(setFetchingComplete(true));
        yield put(setIsFetching(false));
    } catch (error) {
        yield put(fetchCreateCategoryFailure(error))
        yield put(setIsFetching(false));
        yield put(setFetchingSuccess(false))
        yield put(setFetchingComplete(true));
    }
}



export function* FetchCreateCategoryStart() {
    yield takeLatest(CategoryActionTypes.FETCH_CREATE_CATEGORY_START, fetchCreateCategoryAsync)
}




export function* categorySagas() {
    yield all([call(FetchCreateCategoryStart)])
}