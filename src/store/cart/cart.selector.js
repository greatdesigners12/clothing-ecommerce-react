import { createSelector } from "reselect";

// createSelector -> cache
const selectCartReducer = state => state.cart
const getTotalCartReducer = state => state.cart.total

export const getAllCart = createSelector(
    [selectCartReducer], 
    (cart) => cart
)

export const getTotalCart = createSelector(
    [getTotalCartReducer], 
    (cart) => cart
)
