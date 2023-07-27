import {useNavigate } from "react-router-dom";
import "./category-card.styles.jsx";
import {BackgroundImage, CategoryBodyContainer, DirectoryItemContainer} from "./category-card.styles.jsx"


const CategoryCard = ({category}) => {
    const {id, title, imageUrl} = category
    const navigate = useNavigate()
    
    return (
        <DirectoryItemContainer>
          <BackgroundImage imageUrl={imageUrl} key={id} >
            <CategoryBodyContainer>
              <h2>{title}</h2>
              <p onClick={() => navigate(`shop/${title}`)}>Shop now</p>
              
            </CategoryBodyContainer>
          </BackgroundImage>
        </DirectoryItemContainer>
        
    )
}

export default CategoryCard;