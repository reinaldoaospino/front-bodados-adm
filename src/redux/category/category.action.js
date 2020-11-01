import CategoryActionTypes from './category.types';

//Create

export const fetchCreateCategoryStart = (productData) => ({
    type: CategoryActionTypes.FETCH_CREATE_CATEGORY_START,
    payload: productData
})

export const fetchCreateCategorySuccess = () => ({
    type: CategoryActionTypes.FETCH_CREATE_CATEGORY_SUCCESS,
})

export const fetchCreateCategoryFailure = (errorMessage) => ({
    type: CategoryActionTypes.FETCH_CREATE_CATEGORY_FAILURE,
    payload: errorMessage
})

//Get

export const fetchGetCategoryStart = () => ({
    type: CategoryActionTypes.FETCH_GET_CATEGORY_START,
})

export const fetchGetCategorySuccess = (categoriesCollection) => ({
    type: CategoryActionTypes.FETCH_GET_CATEGORY_SUCCESS,
    payload: categoriesCollection
})

export const fetchGetCategoryFailure = (errorMessage) => ({
    type: CategoryActionTypes.FETCH_GET_CATEGORY_FAILURE,
    payload: errorMessage
})


//UPDATE

export const fetcUpdateCategoryStart = (productData) => ({
    type: CategoryActionTypes.FETCH_UPDATE_CATEGORY_START,
    payload: productData
})

export const fetchUpdateCategorySuccess = () => ({
    type: CategoryActionTypes.FETCH_UPDATE_CATEGORY_SUCCESS
})

export const fetchUpdateCategoryFailure = (errorMessage) => ({
    type: CategoryActionTypes.FETCH_UPDATE_CATEGORY_FAILURE,
    payload: errorMessage
})

//DELETE
 export const fetchDeleteCategoryStart = (id) => ({
    type: CategoryActionTypes.FETCH_DELETE_CATEGORY_START,
    payload: id
})

export const fetchDeleteCategorySuccess = () => ({
    type: CategoryActionTypes.FETCH_DELETE_CATEGORY_SUCCESS,
})

export const fetchDeleteCategoryFailure = (errorMessage) => ({
    type: CategoryActionTypes.FETCH_DELETE_CATEGORY_FAILURE,
    payload: errorMessage
})
