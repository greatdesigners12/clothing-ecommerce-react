import {ProductCardContainer, ImgContainer, ButtonContainer, FooterContainer, NameStyle, PriceStyle} from "./product-card.style.jsx"
import Button from "../../button/button.component"
// import { CartContext } from "../../../contexts/cart.context"
// import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemIntoCart } from "../../../store/cart/cart.action.js"
import { getAllCart } from "../../../store/cart/cart.selector.js"


const ProductCard = ({product}) => {
    const {id, imageUrl, name, price} = product
    // const {addItemIntoCart} = useContext(CartContext)
    const {items} = useSelector(getAllCart)
    const dispatch = useDispatch()
    console.log("b")
    const clickBtn = () => {
        dispatch(addItemIntoCart(items, product))
    }
    return (
        <ProductCardContainer key={id}>
            <ImgContainer src={imageUrl} alt={name}/>
            <FooterContainer>
                <NameStyle className="name">{name}</NameStyle>
                <PriceStyle className="price">{price}</PriceStyle>
            </FooterContainer>
            <Button buttonFunc={clickBtn}  buttonType="inverted">Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard