import './category-list.styles.scss';
import CategoryCard from '../card/category-card/category-card.components';

const CategoryList = ({categories}) => {
    return (<div className="categories-container">
      {categories.map((category) => <CategoryCard category={category} />)}
    </div>)
}

export default CategoryList;