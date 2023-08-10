import { useContext } from "react"
import "./checkout-card.style.scss"
import { useDispatch, useSelector } from "react-redux"
import { minQuantityOnProduct, addItemIntoCart, deleteCartItemFromList} from "../../../store/cart/cart.action"
import { getAllCart } from "../../../store/cart/cart.selector"
// import { CartContext } from "../../../contexts/cart.context"

const CheckoutCard = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    // const {minQuantityOnProduct, addItemIntoCart, deleteCartItemFromList} = useContext(CartContext)
    const dispatch = useDispatch()
    console.log("g")

    const {items} = useSelector(getAllCart)
    const minQuantityFunc = (id) => {
        dispatch(minQuantityOnProduct(id, items))
    }

    const addQuantity = (cart) => {
        dispatch(addItemIntoCart( items, cart))
    }

    const removeCartProduct = (idx) => {
        dispatch(deleteCartItemFromList(idx, items))
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