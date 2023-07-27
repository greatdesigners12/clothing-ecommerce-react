import { styled } from "styled-components";
import Button from "../../button/button.component";
import { InvertedButton } from "../../button/button.style";

export const ProductCardContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    img {
      opacity: 0.8;
    }

    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    left: 30px;
  }
`

export const ImgContainer = styled.img`
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
`



export const FooterContainer = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
`

export const NameStyle = styled.span`
        width: 90%;
        margin-bottom: 15px;
`

export const PriceStyle = styled.span`
  width: 10%;
`

  