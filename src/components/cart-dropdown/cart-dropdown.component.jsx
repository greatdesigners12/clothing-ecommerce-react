import { useContext } from "react"

// import { CartContext } from "../../contexts/cart.context"
import Button from "../button/button.component"
import CartItem from "../card/cart-item/cart-item.component"
import {useNavigate} from "react-router-dom"
import { CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.style.jsx"
import { useSelector } from "react-redux"
import { getAllCart } from "../../store/cart/cart.selector"


const CartDropdown = () => {
    // const {cartData} = useContext(CartContext)
    const {items} = useSelector(getAllCart)
    console.log("a")
    const navigate = useNavigate()
    const goToCheckoutHandler = () => {
        navigate("/carts")
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {items.length ? items.map((cart) => {
                    
                    return (<CartItem key={cart.id} cartItem={cart} />)
                }) : (<EmptyMessage>Your cart is empty</EmptyMessage>)

                }
                
            </CartItems>
            
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
            
            
        </CartDropdownContainer>
    )
}

export default CartDropdown