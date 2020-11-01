import { takeLatest, put, all, call } from 'redux-saga/effects';
import { CreateCategory, GetPCategory } from '../../services/category/category.service';
import { setFetchingComplete, setFetchingSuccess, setIsFetching } from '../fetching/fetching.action';
import { fetchCreateCategoryFailure, fetchGetCategoryFailure, fetchGetCategorySuccess } from './category.action';
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

export function* fetchGetCategoryAsync() {
    try {
        yield put(setIsFetching(true));
        var categories = yield GetPCategory();
        yield put(fetchGetCategorySuccess(categories));
        yield put(setFetchingSuccess(true));
        yield put(setFetchingComplete(true));
        yield put(setIsFetching(false));
    } catch (error) {
        yield put(fetchGetCategoryFailure(error))
        yield put(setIsFetching(false));
        yield put(setFetchingSuccess(false))
        yield put(setFetchingComplete(true));
    }
}




export function* fetchCreateCategoryStart() {
    yield takeLatest(CategoryActionTypes.FETCH_CREATE_CATEGORY_START, fetchCreateCategoryAsync)
}

export function* fetchGetCategoryStart() {
    yield takeLatest(CategoryActionTypes.FETCH_GET_CATEGORY_START, fetchGetCategoryAsync)
}


export function* categorySagas() {
    yield all([call(fetchCreateCategoryStart),call(fetchGetCategoryStart)])
}