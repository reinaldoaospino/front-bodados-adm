import ProductActionType from './product.types';

//Create

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

//Get

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


//UPDATE

export const fetcUpdateProdutcStart = (productData) => ({
    type: ProductActionType.FETCH_UPDATE_PRODUCTS_START,
    payload: productData
})

export const fetchUpdateProdutcSuccess = () => ({
    type: ProductActionType.FETCH_UPDATE_PRODUCTS_SUCCESS,
})

export const fetchUpdateProdutcFailure = (errorMessage) => ({
    type: ProductActionType.FETCH_UPDATE_PRODUCTS_FAILURE,
    payload: errorMessage
})

//DELETE
export const fetchDeleteProductStart = (id) => ({
    type: ProductActionType.FETCH_DELETE_PRODUCTS_START,
    payload: id
})

export const fetchDeleteProdutcSuccess = () => ({
    type: ProductActionType.FETCH_DELETE_PRODUCTS_SUCCESS,
})

export const fetchDeleteProdutcFailure = (errorMessage) => ({
    type: ProductActionType.FETCH_DELETE_PRODUCTS_FAILURE,
    payload: errorMessage
})


//OTHERS

export const setActionSuccess = (stateAction) => ({
    type: ProductActionType.SET_ACTION_SUCCESS,
    payload: stateAction
})

export const setActionFailure = (stateAction) => ({
    type: ProductActionType.SET_ACTION_FAILURE,
    payload: stateAction
})

export const setActionComplete = (stateAction) => ({
    type: ProductActionType.SET_ACTION_COMPLETE,
    payload: stateAction
})
