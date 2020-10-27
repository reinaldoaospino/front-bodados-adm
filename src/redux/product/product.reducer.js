import ProductActionTypes from './product.types';


const INITIAL_STATE = {
    isFetching: false,
    errorMessage: undefined,
    productsCollection: undefined,
    actionComplete: false,
    actionSucess: false,
    actionFailure: false,
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_CREATE_PRODUCTS_START:
            return {
                ...state,
                isFetching: true
            }
        case ProductActionTypes.FETCH_CREATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                actionSucess: true,
                actionComplete: true,
            }
        case ProductActionTypes.FETCH_CREATE_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                actionFailure: true,
                actionComplete: true,
            }

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