import ProductActionTypes from './product.types';


const INITIAL_STATE = {
    isFetching: false,
    errorMessage: undefined,
    productsCollection: undefined,
    actionSucess: false,
    actionFailure: false
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
                actionSucess: true
            }
        case ProductActionTypes.FETCH_CREATE_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                actionFailure: true
            }

        case ProductActionTypes.FETCH_GET_PRODUCTS_START:
            return {
                ...state,
                isFetching: true
            }
        case ProductActionTypes.FETCH_GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                productsCollection: action.payload
            }
        case ProductActionTypes.FETCH_GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case ProductActionTypes.SET_ACTION_SUCCESS:
            return{
                ...state,
                actionSucess: action.payload
            }

        default:
            return state;
    }
}

export default ProductReducer;