import {CategoryContainer} from "./category.styles.jsx"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState} from "react"
import { CategoryContext } from "../../contexts/categories.context"
import ProductCard from "../../components/card/product-card/product-card.component"
import { useSelector } from "react-redux"
import { getCurrentCategories, selectCategoriesIsLoading } from "../../store/categories/categories.selector.js"
import Spinner from "../../components/spinner/spinner.component.jsx"

const Category = () => {
    const {category} = useParams()
    // const {categoriesMap} = useContext(CategoryContext)
    const categoriesMap = useSelector(getCurrentCategories)
    const [products, setProducts] = useState([])
    const isLoading = useSelector(selectCategoriesIsLoading)

    useEffect(() => {
        
        setProducts(categoriesMap[category])
    }, [categoriesMap])

    return (
        <div>
        {
            isLoading  ? <Spinner /> : <CategoryContainer>{products && products.map((product) => <ProductCard key={product.id} product={product} />) }</CategoryContainer>
        }
        
            
        </div>
    )
}



export default Category