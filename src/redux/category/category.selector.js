import { createSelector } from 'reselect';


const selectCategory = state => state.category;


export const selectCategoryCollection = createSelector(
    [selectCategory],
    product => product.categoryCollection
)


export const selectCategoryError = createSelector(
    [selectCategory],
    product => product.errorMessage
)

export const selectCategoryFilter = createSelector(
    [selectCategory],
    product => product.categoryFilter
)

