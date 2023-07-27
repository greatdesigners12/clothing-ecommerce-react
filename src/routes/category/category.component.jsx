import {CategoryContainer} from "./category.styles.jsx"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState} from "react"
import { CategoryContext } from "../../contexts/categories.context"
import ProductCard from "../../components/card/product-card/product-card.component"

const Category = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoryContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log(category)
        setProducts(categoriesMap[category])
    }, [categoriesMap])

    return (
        <CategoryContainer>
            {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </CategoryContainer>
    )
}

export default Category