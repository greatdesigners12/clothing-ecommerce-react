import { useContext } from "react"
// import { CartContext } from "../../../contexts/cart.context"
import "./cart-list.style.scss"
import CheckoutCard from "../../card/checkout-card/checkout-card.component"
import { useSelector } from "react-redux"
import { getCurrentCategories } from "../../../store/categories/categories.selector"
import { getAllCart } from "../../../store/cart/cart.selector"
import PaymentForm from "../../payment-form/payment-form.component"

const CartList = () => {
    // const {cartData, cartTotal} = useContext(CartContext)
    const {items, total} = useSelector(getAllCart)
    console.log("bro")
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
            {items.map((cart) => {
                return (
                    <CheckoutCard key={cart.id} cartItem={cart}/>
                )
            })}
            <span className="total">Total : ${total}</span>
            <PaymentForm />
        </div>
    )
}

export default CartList