import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import {ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentCategories } from "../../store/categories/categories.selector.js"
import { toggleCart } from "../../store/cart-dropdown/cart-dropdown.action.js"
import { getAllCart } from "../../store/cart/cart.selector.js"


const CartIcon = () => {
    
    const {items} = useSelector(getAllCart)
    const dispatch = useDispatch()

    const ClickCart = () => {
        
        dispatch(toggleCart)
    }
    return (
        <CartIconContainer onClick={ClickCart}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{items.reduce((prev, currentData) => {return prev + currentData.quantity}, 0)}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon