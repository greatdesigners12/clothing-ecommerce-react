import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import {ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx"

const CartIcon = () => {
    const {isActive ,setActive, cartData} = useContext(CartContext)
    const ClickCart = () => {
        
        setActive(!isActive)
    }
    return (
        <CartIconContainer onClick={ClickCart}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartData.reduce((prev, currentData) => {return prev + currentData.quantity}, 0)}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon