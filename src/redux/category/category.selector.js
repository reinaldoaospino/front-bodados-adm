import { createSelector } from 'reselect';


const selectCategory = state => state.category;

const allObjet = { "id": 0, categoryName: "all" };

export const selectCategoryCollection = createSelector(
    [selectCategory],
    product => product.categoryCollection ? [allObjet, ...product.categoryCollection] : null
)


export const selectCategoryError = createSelector(
    [selectCategory],
    product => product.errorMessage
)

export const selectCategoryFilter = createSelector(
    [selectCategory],
    product => product.categoryFilter
)

