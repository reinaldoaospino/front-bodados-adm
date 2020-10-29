import CategoryActionType from './category.types';

//Create

export const fetchCreateCategoryStart = (productData) => ({
    type: CategoryActionType.FETCH_CREATE_CATEGORY_START,
    payload: productData
})

export const fetchCreateCategorySuccess = () => ({
    type: CategoryActionType.FETCH_CREATE_CATEGORY_SUCCESS,
})

export const fetchCreateCategoryFailure = (errorMessage) => ({
    type: CategoryActionType.FETCH_CREATE_CATEGORY_FAILURE,
    payload: errorMessage
})

//Get

export const fetchGetCategoryStart = () => ({
    type: CategoryActionType.FETCH_GET_CATEGORY_START,
})

export const fetchGetCategorySuccess = (productsCollection) => ({
    type: CategoryActionType.FETCH_GET_CATEGORY_SUCCESS,
    payload: productsCollection
})

export const fetchGetCategoryFailure = (errorMessage) => ({
    type: CategoryActionType.FETCH_GET_CATEGORY_FAILURE,
    payload: errorMessage
})


//UPDATE

export const fetcUpdateCategoryStart = (productData) => ({
    type: CategoryActionType.FETCH_UPDATE_CATEGORY_START,
    payload: productData
})

export const fetchUpdateCategorySuccess = () => ({
    type: CategoryActionType.FETCH_UPDATE_CATEGORY_SUCCESS,
})

export const fetchUpdateCategoryFailure = (errorMessage) => ({
    type: CategoryActionType.FETCH_UPDATE_CATEGORY_FAILURE,
    payload: errorMessage
})

//DELETE
export const fetchDeleteCategoryStart = (id) => ({
    type: CategoryActionType.FETCH_DELETE_CATEGORY_START,
    payload: id
})

export const fetchDeleteCategorySuccess = () => ({
    type: CategoryActionType.FETCH_DELETE_CATEGORY_SUCCESS,
})

export const fetchDeleteCategoryFailure = (errorMessage) => ({
    type: CategoryActionType.FETCH_DELETE_CATEGORY_FAILURE,
    payload: errorMessage
})
