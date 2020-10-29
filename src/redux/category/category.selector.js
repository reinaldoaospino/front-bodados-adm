import { createSelector } from 'reselect';


const selectCategory = state => state.category;


export const selectCategoryCollection = createSelector(
    [selectCategory],
    product => product.productsCollection
)


