import { takeLatest, put, all, call } from 'redux-saga/effects';
import ProductActionTypes from './product.types';
import { fetchCreateProdutcSuccess, fetchCreateProdutcFailure, fetchGetProdutcSuccess } from './product.action'
import { CreateProduct, GetProducts } from '../../services/product/product-service';

export function* fetchCreateAsync({ payload }) {

    try {
        yield CreateProduct(payload);
        yield fetchCreateProdutcSuccess();
    } catch (error) {
        yield put(fetchCreateProdutcFailure(error))
    }
}

export function* fetchGetAsync() {

    try {
        var collection = yield GetProducts();
        yield put(fetchGetProdutcSuccess(collection));
    } catch (error) {
        yield put(fetchCreateProdutcFailure(error))
    }
}

export function* fetchCreateStart() {
    yield takeLatest(ProductActionTypes.FETCH_CREATE_PRODUCTS_START, fetchCreateAsync)
}

export function* fetchGetStart() {
    yield takeLatest(ProductActionTypes.FETCH_GET_PRODUCTS_START, fetchGetAsync)
}


export function* productSagas() {
    yield all([call(fetchCreateStart),call(fetchGetStart)])
}