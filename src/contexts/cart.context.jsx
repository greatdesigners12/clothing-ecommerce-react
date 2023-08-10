// import { useState, useEffect, useReducer } from "react";
// import { createContext } from "react";

// const defaultData = {
//     isActive: false,
//     cartData: [],
//     setActive: () => null,
//     minQuantityOnProduct : () => null,
//     cartTotal: 0,
//     addItemIntoCart: () => null,
//     deleteCartItemFromList: () => null
   
// }



// const generateNewCarts= (curData, product) => {
//     // find if product is exist
//     const check = curData.find((item) => item.id === product.id) // find() -> return the element, if the condition is true
//     // if found, increment quantity
//     if (check){
//         return curData.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
//     }
//     // return new array
//     return [...curData, {...product, quantity:1}]
// }

// const cartReducer = (state, action) => {
//     const {type, payload} = action
    
//     switch(type){
//         case "SET_CART":
//             return {items: payload.items, total: payload.total}
//         default :
//             throw Error("Invalid type in cart context")
//     }
// }

// const deleteCartItem = (curData, idx) =>  curData.filter((item) => item.id != idx)

// const minQuantity = (curData, id) => {
//     const check = curData.find((item) => item.id === id)
//     if (check.quantity == 1){
//         return deleteCartItem(curData, check.id)
//     }
//     return curData.map((item) => item.id === id ?  {...item, quantity: item.quantity - 1} : item)
// }

// const isCartOpenReducer = (state, action) => {
//     const {type} = action
//     switch(type) {
//         case "TOGGLE_CART" :
//             return !state
//         default :
//             throw Error("Invalid type in cart context (cart open reducer)")
//     }
// }

// export const isCartOpenReducerType = {
//     TOGGLE_CART : "TOGGLE_CART"
// }

// export const CartContext =  createContext(defaultData)

// const setCartItems = (data) => {
//     const total = data.reduce((prev, val) => prev + (val.price * val.quantity), 0)
//     return {items : data, total}
// }

// export const CartInfoProvider = ({children}) => {
//     // const [cartData, setCartData] = useState([])
//     // const [isActive, setActive] = useState(false)
//     // const [cartTotal, setCartTotal] = useState(0)
//     const [isActive, isCartOpenDispatch] = useReducer(isCartOpenReducer, false)
//     const [cartData, dispatch] = useReducer(cartReducer, {items: [], total: 0}) 
//     const {items, total} = cartData
//     const addItemIntoCart = (product) => {
//         console.log(product)
//         dispatch({type : CartContextType.SET_CART, payload: setCartItems(generateNewCarts(items, product))})
//     }

//     const setActive = () => {
//         isCartOpenDispatch({type: isCartOpenReducerType.TOGGLE_CART})
//     }

//     const sumPriceInCart = () => {
//         return cartData.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
//     }

//     const minQuantityOnProduct = (id) => {
        
//         dispatch({type : CartContextType.SET_CART, payload: setCartItems(minQuantity(items, id))})
//     }

//     const deleteCartItemFromList = (id) => {
        
//         dispatch({type : CartContextType.SET_CART, payload: setCartItems(deleteCartItem(items, id))})
//     }

   
    

//     const value = {isActive, cartData: items, setActive, minQuantityOnProduct, cartTotal: total,  addItemIntoCart, deleteCartItemFromList}
//     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }