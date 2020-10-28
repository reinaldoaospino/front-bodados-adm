import ProductActionTypes from './product.types';


const INITIAL_STATE = {
    isFetching: false,
    errorMessage: undefined,
    productsCollection: undefined,
    actionComplete: false,
    actionSucess: false,
    actionFailure: false,
    isCreating: false,
    isUpdating: false,
    isDeleting: false
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //CREATE
        case ProductActionTypes.FETCH_CREATE_PRODUCTS_START:
            return {
                ...state,
                isCreating: true
            }
        case ProductActionTypes.FETCH_CREATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isCreating: false,
                actionSucess: true,
                actionComplete: true,
            }
        case ProductActionTypes.FETCH_CREATE_PRODUCTS_FAILURE:
            return {
                ...state,
                isCreating: false,
                errorMessage: action.payload,
                actionFailure: true,
                actionComplete: true,
            }

        //GET
        case ProductActionTypes.FETCH_GET_PRODUCTS_START:
            return {
                ...state,
            }
        case ProductActionTypes.FETCH_GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: true,
                productsCollection: action.payload
            }
        case ProductActionTypes.FETCH_GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: true,
                errorMessage: action.payload
            }

        //UPDATE

        case ProductActionTypes.FETCH_UPDATE_PRODUCTS_START:
            return {
                ...state,
                isUpdating: true
            }
        case ProductActionTypes.FETCH_UPDATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                actionComplete: true,
            }
        case ProductActionTypes.FETCH_UPDATE_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isUpdating: false,
                actionComplete: true,
            }

        //DELETE

        case ProductActionTypes.FETCH_DELETE_PRODUCTS_START:
            return {
                ...state,
                isDeleting: true
            }
        case ProductActionTypes.FETCH_DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                actionSucess: true,
                actionComplete: true,
            }
        case ProductActionTypes.FETCH_DELETE_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isDeleting: false,
                actionSucess: false,
                actionComplete: true,
            }


        //OTHERS
        case ProductActionTypes.SET_ACTION_SUCCESS:
            return {
                ...state,
                actionSucess: action.payload,
                clearCreateForm: action.payload
            }
        case ProductActionTypes.SET_ACTION_FAILURE:
            return {
                ...state,
                actionFailure: action.payload
            }

        case ProductActionTypes.SET_ACTION_COMPLETE:
            return {
                ...state,
                actionComplete: action.payload
            }

        default:
            return state;
    }
}

export default ProductReducer;
