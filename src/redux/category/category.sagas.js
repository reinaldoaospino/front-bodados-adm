import { takeLatest, put, all, call } from 'redux-saga/effects';
import { CreateCategory, DeleteCategory, GetCategory, UpdateCategory } from '../../services/category/category.service';
import { feching, fechingComplete, fechingFailure } from '../helpers/fechingHelper';
import { fetchCreateCategoryFailure, fetchGetCategoryFailure, fetchGetCategorySuccess, fetchUpdateCategoryFailure, fetchUpdateCategorySuccess } from './category.action';
import CategoryActionTypes from './category.types';


export function* fetchCreateCategoryAsync({ payload }) {
    try {
        yield feching();
        yield CreateCategory(payload)
        yield fechingComplete();
    } catch (error) {
        yield put(fetchCreateCategoryFailure(error))
        yield fechingFailure();
    }
}

export function* fetchGetCategoryAsync() {
    try {
        yield feching();
        var categories = yield GetCategory();
        yield put(fetchGetCategorySuccess(categories));
        yield fechingComplete();
    } catch (error) {
        yield put(fetchGetCategoryFailure(error))
        yield fechingFailure();
    }
}

export function* fetchUpdateCategoryAsync({ payload }) {
    try {
        yield feching();
        yield UpdateCategory(payload);
        yield fechingComplete();
        window.location.reload();
    } catch (error) {
        yield put(fetchUpdateCategoryFailure(error))
        yield fechingFailure();
    }
}

export function* fetchDeleteCategoryAsync({ payload }) {
    try {
        yield feching();
        yield DeleteCategory(payload);
        yield fechingComplete();
        window.location.reload();
    } catch (error) {
        yield put(fetchUpdateCategoryFailure(error))
        yield fechingFailure();
    }
}



export function* fetchCreateCategoryStart() {
    yield takeLatest(CategoryActionTypes.FETCH_CREATE_CATEGORY_START, fetchCreateCategoryAsync)
}

export function* fetchGetCategoryStart() {
    yield takeLatest(CategoryActionTypes.FETCH_GET_CATEGORY_START, fetchGetCategoryAsync)
}

export function* fetchUpdateCategoryStart() {
    yield takeLatest(CategoryActionTypes.FETCH_UPDATE_CATEGORY_START, fetchUpdateCategoryAsync)
}

export function* fetchDeleteCategoryStart() {
    yield takeLatest(CategoryActionTypes.FETCH_DELETE_CATEGORY_START, fetchDeleteCategoryAsync)
}

export function* categorySagas() {
    yield all([call(fetchCreateCategoryStart), call(fetchGetCategoryStart), call(fetchUpdateCategoryStart), call(fetchDeleteCategoryStart)])
}
