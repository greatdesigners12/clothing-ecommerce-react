export const cartDropdownReducer = (state={isActive : false}, action) => {
    const {type} = action 
    switch(type){  
        case "TOGGLE_CART" :
            return {isActive : !state.isActive}
        default :
            return state
    }
}