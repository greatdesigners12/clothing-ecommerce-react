import {CategoriesContainer} from './category-list.styles.jsx';
import CategoryCard from '../../card/category-card/category-card.components';
import { Fragment } from 'react';

const CategoryList = () => {
    const categories = [
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ]
    return (
    <Fragment>
      <CategoriesContainer>
        {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
      </CategoriesContainer>
    </Fragment>)
}

export default CategoryList;