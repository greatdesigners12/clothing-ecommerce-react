import "./category-card.styles.scss";

const CategoryCard = ({category}) => {
    const {id, title, imageUrl} = category
    return (
        <div key={id} className="category-container" style={
            {'backgroundImage' : `url('${imageUrl}')`}
          }>
              <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop now</p>
              </div>
          </div>
    )
}

export default CategoryCard;