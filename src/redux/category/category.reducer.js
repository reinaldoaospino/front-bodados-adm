import CategoryActionTypes from "./category.types";

const INITIAL_STATE = {
  isFetching: true,
  errorMessage: undefined,
  CategoryCollection: undefined,
  actionComplete: false,
  actionSucess: false,
  actionFailure: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,
  categoryFilter: undefined
};

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //CREATE
    case CategoryActionTypes.FETCH_CREATE_CATEGORY_START:
      return {
        ...state,
      };
    case CategoryActionTypes.FETCH_CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
      };
    case CategoryActionTypes.FETCH_CREATE_CATEGORY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.response.data.ErrorCode === 2 ? 'Error en cargar, no se pueden cargar categorias ya existentes' : 'Fallo la carga de productos',
      };

    //GET
    case CategoryActionTypes.FETCH_GET_CATEGORY_START:
      return {
        ...state,
        isFetching: true
      };
    case CategoryActionTypes.FETCH_GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categoryCollection: action.payload,
        actionFailure: false
      };
    case CategoryActionTypes.FETCH_GET_CATEGORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        actionFailure: true
      };

    //UPDATE

    case CategoryActionTypes.FETCH_UPDATE_CATEGORY_START:
      return {
        ...state
      };
    case CategoryActionTypes.FETCH_UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        actionComplete: true
      };
    case CategoryActionTypes.FETCH_UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isUpdating: false,
        actionComplete: true
      };

    //DELETE

    case CategoryActionTypes.FETCH_DELETE_CATEGORY_START:
      return {
        ...state,
        isDeleting: true
      };
    case CategoryActionTypes.FETCH_DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        actionSucess: true,
        actionComplete: true
      };
    case CategoryActionTypes.FETCH_DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isDeleting: false,
        actionSucess: false,
        actionComplete: true
      };

      //OTHERS
      case CategoryActionTypes.SET_CATEGORY_FILTER:
        return {
          ...state,
          categoryFilter: action.payload
        };

    default:
      return state;
  }
};

export default CategoryReducer;
