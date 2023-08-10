import {Route, Routes} from "react-router-dom";

import "./shop.style.scss"
import Category from '../../routes/category/category.component'
import CategoriesPreview from '../preview/categories-preview/categories-preview.component'
import { CategoriesProvider } from "../../contexts/categories.context";
import { useEffect } from "react";
import { CategoryActionType } from "../../store/categories/categories.types";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/categories.action";


const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        
        dispatch(fetchCategoriesStart())
    }, [])

    
    return (
        // relative dengan parent route
        <div>
            {/* <CategoriesProvider> */}
                <Routes>
                    <Route index element={<CategoriesPreview/>} />
                    <Route path=":category" element={<Category/>} />
                </Routes>
            {/* </CategoriesProvider> */}
        </div>
    )
}

export default Shop