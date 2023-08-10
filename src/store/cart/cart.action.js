import { CartContextType } from "./cart.types"

export const generateNewCarts= (curData, product) => {
    // find if product is exist
    const check = curData.find((item) => item.id === product.id) // find() -> return the element, if the condition is true
    // if found, increment quantity
    if (check){
        return curData.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
    }
    // return new array
    return [...curData, {...product, quantity:1}]
}

export const deleteCartItem = (curData, idx) =>  curData.filter((item) => item.id != idx)

export const minQuantity = (curData, id) => {
    const check = curData.find((item) => item.id === id)
    if (check.quantity == 1){
        return deleteCartItem(curData, check.id)
    }
    return curData.map((item) => item.id === id ?  {...item, quantity: item.quantity - 1} : item)
}



export const setCartItems = (data) => {
    const total = data.reduce((prev, val) => prev + (val.price * val.quantity), 0)
    return {items : data, total}
}



export const addItemIntoCart = (items, product) => {
    
    return {type : CartContextType.SET_CART, payload: setCartItems(generateNewCarts(items, product))}
}

export const sumPriceInCart = (cartData) => {
    return cartData.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
}

export const minQuantityOnProduct = (id, items) => {
    
    return {type : CartContextType.SET_CART, payload: setCartItems(minQuantity(items, id))}
}

export const deleteCartItemFromList = (id, items) => {
    
    return {type : CartContextType.SET_CART, payload: setCartItems(deleteCartItem(items, id))}
}

   