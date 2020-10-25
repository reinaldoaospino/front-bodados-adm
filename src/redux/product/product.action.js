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

export const fetchGetProdutcStart = () => ({
    type: ProductActionType.FETCH_GET_PRODUCTS_START,
})

export const fetchGetProdutcSuccess = (productsCollection) => ({
    type: ProductActionType.FETCH_GET_PRODUCTS_SUCCESS,
    payload: productsCollection
})

export const fetchGetProdutcFailure = (errorMessage) => ({
    type: ProductActionType.FETCH_GET_PRODUCTS_FAILURE,
    payload: errorMessage
})