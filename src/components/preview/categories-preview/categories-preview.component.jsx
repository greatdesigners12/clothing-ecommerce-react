import { Fragment, useContext } from "react"

import { CategoryContext } from "../../../contexts/categories.context"
import CategoryPreview from "../category-preview/category-preview.component"


const CategoriesPreview = () => {
    let {categoriesMap} = useContext(CategoryContext)
    
    
    
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                
                 return <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
            })}
        </Fragment>
    )
}

export default CategoriesPreview