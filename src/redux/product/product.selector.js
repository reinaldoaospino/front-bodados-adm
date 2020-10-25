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