import { Fragment, useContext } from "react"

import { CategoryContext } from "../../../contexts/categories.context"
import CategoryPreview from "../category-preview/category-preview.component"
import { useSelector } from "react-redux"
import { getCurrentCategories, selectCategoriesIsLoading } from "../../../store/categories/categories.selector"
import Spinner from "../../spinner/spinner.component"


const CategoriesPreview = () => {
    let categoriesMap = useSelector(getCurrentCategories)
    let isLoading = useSelector(selectCategoriesIsLoading)
    
    return (
        <Fragment>
            {
                isLoading ? <Spinner /> : (Object.keys(categoriesMap).map((title) => {
                
                    return <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
               }))
            }
            
        </Fragment>
    )
}

export default CategoriesPreview