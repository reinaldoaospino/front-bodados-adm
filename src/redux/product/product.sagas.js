import { takeLatest, put, all, call } from 'redux-saga/effects';
import ProductActionTypes from './product.types';
import { fetchCreateProdutcSuccess, fetchCreateProdutcFailure } from './product.action'
import { CreateProduct } from '../../services/product/product-service';

export function* fetchCreateAsync({ payload }) {

    try {
        yield CreateProduct(payload);
        yield fetchCreateProdutcSuccess();
    } catch (error) {
        yield put(fetchCreateProdutcFailure(error))
    }
}

export function* fetchCreateStart() {
    yield takeLatest(ProductActionTypes.FETCH_CREATE_PRODUCTS_START, fetchCreateAsync)
}


export function* productSagas() {
    yield all([call(fetchCreateStart)])
}