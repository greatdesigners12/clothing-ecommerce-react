import {Route, Routes} from "react-router-dom";

import "./shop.style.scss"
import Category from '../../routes/category/category.component'
import CategoriesPreview from '../preview/categories-preview/categories-preview.component'



const Shop = () => {
    
    return (
        // relative dengan parent route
        <div>
            <Routes>
                <Route index element={<CategoriesPreview/>} />
                <Route path=":category" element={<Category/>} />
            </Routes>
        </div>
    )
}

export default Shop