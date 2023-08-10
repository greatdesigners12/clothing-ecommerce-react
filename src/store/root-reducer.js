
import { combineReducers } from "redux"; // if you want to use redux without toolkit
// import { combineReducers } from "@reduxjs/toolkit"; // if you want to use redux with toolkit
import { UserReducer } from "./user/user.reducer";
import { CategoryReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { cartDropdownReducer } from "./cart-dropdown/cart-dropdown.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    category: CategoryReducer,
    cart : cartReducer,
    cartDropdown: cartDropdownReducer 
})