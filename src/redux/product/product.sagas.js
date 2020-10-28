import { takeLatest, put, all, call } from 'redux-saga/effects';
import ProductActionTypes from './product.types';
import { fetchCreateProdutcSuccess, fetchCreateProdutcFailure, fetchGetProdutcSuccess, fetchUpdateProdutcSuccess, fetchUpdateProdutcFailure, fetchDeleteProdutcSuccess, fetchDeleteProdutcFailure, fetchGetProdutcFailure } from './product.action'
import { CreateProduct, GetProducts, UpdateProducts, DeleteProduct } from '../../services/product/product-service';

export function* fetchCreateAsync({ payload }) {

    try {
        yield CreateProduct(payload);
        yield put(fetchCreateProdutcSuccess());
    } catch (error) {
        yield put(fetchCreateProdutcFailure(error))
    }
}

export function* fetchGetAsync() {

    try {
        var collection = yield GetProducts();
        yield put(fetchGetProdutcSuccess(collection));
    } catch (error) {
        yield put(fetchGetProdutcFailure(error))
    }
}

export function* fetchUpdateAsync({ payload }) {

    try {
        yield UpdateProducts(payload);
        yield put(fetchUpdateProdutcSuccess());
    } catch (error) {
        yield put(fetchUpdateProdutcFailure(error))
    }
}


export function* fetchDeleteAsync({ payload }) {

    try {
        yield DeleteProduct(payload);
        yield put(fetchDeleteProdutcSuccess());
        window.location.reload();
    } catch (error) {
        yield put(fetchDeleteProdutcFailure(error))
    }
}

export function* fetchCreateStart() {
    yield takeLatest(ProductActionTypes.FETCH_CREATE_PRODUCTS_START, fetchCreateAsync)
}

export function* fetchGetStart() {
    yield takeLatest(ProductActionTypes.FETCH_GET_PRODUCTS_START, fetchGetAsync)
}

export function* fetchUpdateStart() {
    yield takeLatest(ProductActionTypes.FETCH_UPDATE_PRODUCTS_START, fetchUpdateAsync)
}

export function* fetchDeleteStart() {
    yield takeLatest(ProductActionTypes.FETCH_DELETE_PRODUCTS_START, fetchDeleteAsync)
}



export function* productSagas() {
    yield all([call(fetchCreateStart), call(fetchGetStart), call(fetchUpdateStart), call(fetchDeleteStart)])
}
