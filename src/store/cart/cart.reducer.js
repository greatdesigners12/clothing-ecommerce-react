

export const cartReducer = (state = {items: [], total: 0}, action) => {
    const {type, payload} = action
    
    switch(type){
        case "SET_CART":
            return {items: payload.items, total: payload.total}
        
        default :
            return state
    }
}