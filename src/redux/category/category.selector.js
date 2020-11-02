import { createSelector } from 'reselect';


const selectCategory = state => state.category;


export const selectCategoryCollection = createSelector(
    [selectCategory],
    product =>{
        
        if(product.categoryCollection){
            var allObjt = {"id": 0, categoryName: "all"}
            var collection =  [allObjt,...product.categoryCollection]

            return collection;
        }

        return null;
       
    } 
)


export const selectCategoryError = createSelector(
    [selectCategory],
    product => product.errorMessage
)

export const selectCategoryFilter = createSelector(
    [selectCategory],
    product => product.categoryFilter
)

