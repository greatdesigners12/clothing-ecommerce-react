import { useContext } from "react"
import { CartContext } from "../../../contexts/cart.context"
import "./cart-list.style.scss"
import CheckoutCard from "../../card/checkout-card/checkout-card.component"



const CartList = () => {
    const {cartData, cartTotal} = useContext(CartContext)
   
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartData.map((cart) => {
                return (
                    <CheckoutCard key={cart.id} cartItem={cart}/>
                )
            })}
            <span className="total">Total : ${cartTotal}</span>
        </div>
    )
}

export default CartList