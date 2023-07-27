import {ProductCardContainer, ImgContainer, ButtonContainer, FooterContainer, NameStyle, PriceStyle} from "./product-card.style.jsx"
import Button from "../../button/button.component"
import { CartContext } from "../../../contexts/cart.context"
import { useContext } from "react"

const ProductCard = ({product}) => {
    const {id, imageUrl, name, price} = product
    const {addItemIntoCart} = useContext(CartContext)
    const clickBtn = () => {
        addItemIntoCart(product)
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