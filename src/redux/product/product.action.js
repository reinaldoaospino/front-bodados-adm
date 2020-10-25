import ProductActionType from './product.types';


export const fetchCreateProdutcStart = (productData) => ({
    type: ProductActionType.FETCH_CREATE_PRODUCTS_START,
    payload: productData
})

export const fetchCreateProdutcSuccess = () => ({
    type: ProductActionType.FETCH_CREATE_PRODUCTS_SUCCESS,
})

export const fetchCreateProdutcFailure = (errorMessage) => ({
    type: ProductActionType.FETCH_CREATE_PRODUCTS_FAILURE,
    payload: errorMessage
})