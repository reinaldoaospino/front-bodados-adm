import ProductActionTypes from './product.types';


const INITIAL_STATE = {
    isFetching: true,
    errorMessage: undefined,
    productsCollection: undefined
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
                isFetching: false
            }
        case ProductActionTypes.FETCH_CREATE_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
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

        default:
            return state;
    }
}

export default ProductReducer;