import { createSelector } from 'reselect';


const selectProduct = state => state.product;


export const selectProductCollection = createSelector(
    [selectProduct],
    product => product.productsCollection
)

export const selectIsFetching = createSelector(
    [selectProduct],
    product => product.isFetching
)

export const selectActionSucess = createSelector(
    [selectProduct],
    product => product.actionSucess
)


export const selectActionFailure = createSelector(
    [selectProduct],
    product => product.actionFailure
)

export const selectActionComplete = createSelector(
    [selectProduct],
    product => product.actionComplete
)


export const selectIsCreating = createSelector(
    [selectProduct],
    product => product.isCreating
)

export const selectIsUpdating = createSelector(
    [selectProduct],
    product => product.isUpdating
)

export const selectIsDeleting = createSelector(
    [selectProduct],
    product => product.isDeleting
)

