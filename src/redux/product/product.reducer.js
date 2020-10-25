import ProductActionTypes from './product.types';


const INITIAL_STATE = {
    isFetching: false,
    errorMessage: undefined,
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

        default:
            return state;
    }
}

export default ProductReducer;