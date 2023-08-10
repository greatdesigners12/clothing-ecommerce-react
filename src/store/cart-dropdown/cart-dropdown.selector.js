import { createSelector } from "reselect"

const cartDropdown = state => state.cartDropdown

export const isDropdownActive = createSelector([cartDropdown], (data) => {
    return data
})


