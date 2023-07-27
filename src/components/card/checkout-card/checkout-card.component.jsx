import { useContext } from "react"
import "./checkout-card.style.scss"
import { CartContext } from "../../../contexts/cart.context"

const CheckoutCard = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const {minQuantityOnProduct, addItemIntoCart, deleteCartItemFromList} = useContext(CartContext)
    const minQuantityFunc = (id) => {
        minQuantityOnProduct(id)
    }

    const addQuantity = (cart) => {
        addItemIntoCart(cart)
    }

    const removeCartProduct = (idx) => {
        deleteCartItemFromList(idx)
    } 
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => minQuantityFunc(cartItem.id)}>
                    &#10094;   
                </div>
                {quantity}
                <div className="arrow" onClick={() => addQuantity(cartItem)}>
                    &#10095;
                </div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeCartProduct(cartItem.id)}>&#10005;</div>
        </div>
    )
}

export default CheckoutCard     