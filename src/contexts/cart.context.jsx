import { useState, useEffect } from "react";
import { createContext } from "react";

const defaultData = {
    isActive: false,
    cartData: [],
    setActive: () => null,
    minQuantityOnProduct : () => null,
    cartTotal: 0,
    addItemIntoCart: () => null,
    deleteCartItemFromList: () => null
   
}

const generateNewCarts= (curData, product) => {
    // find if product is exist
    const check = curData.find((item) => item.id === product.id) // find() -> return the element, if the condition is true
    // if found, increment quantity
    if (check){
        return curData.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
    }
    // return new array
    return [...curData, {...product, quantity:1}]
}

const deleteCartItem = (curData, idx) =>  curData.filter((item) => item.id != idx)

const minQuantity = (curData, id) => {
    const check = curData.find((item) => item.id === id)
    if (check.quantity == 1){
        return deleteCartItem(curData, check.id)
    }
    return curData.map((item) => item.id === id ?  {...item, quantity: item.quantity - 1} : item)
}

export const CartContext =  createContext(defaultData)

export const CartInfoProvider = ({children}) => {
    const [cartData, setCartData] = useState([])
    const [isActive, setActive] = useState(false)
    const [cartTotal, setCartTotal] = useState(0)
    
    const addItemIntoCart = (product) => {
        setCartData(generateNewCarts(cartData, product))
    }

    const sumPriceInCart = () => {
        return cartData.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
    }

    const minQuantityOnProduct = (id) => {
        setCartData(minQuantity(cartData, id))
    }

    const deleteCartItemFromList = (id) => {
        setCartData(deleteCartItem(cartData, id))
    }

    useEffect(() => {
        setCartTotal(cartData.reduce((prev, val) => prev + (val.price * val.quantity), 0))
    }, [cartData])

    const value = {isActive, cartData, setActive, minQuantityOnProduct, cartTotal,  addItemIntoCart, deleteCartItemFromList}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}