import { createSelector } from "reselect"

const selectCategoryReducer = (state) => state.category

// createSelector cache the data, so that if the data hasn't changed it won't trigger anything
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categories
)

// selectCategories get reverted into selectCategoryReducer before running the reduce function
export const getCurrentCategories = createSelector([selectCategories], 
    (categories) => categories.reduce((prev, snapshot) => {
        
        const {title, items} = snapshot
        prev[title.toLowerCase()] = items
        return prev
    }, {}) 
)

export const selectCategoriesIsLoading = createSelector([selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading)