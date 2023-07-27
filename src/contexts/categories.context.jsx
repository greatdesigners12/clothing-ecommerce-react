import { createContext, useEffect, useState } from "react"
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils"


export const CategoryContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
   
    const [categoriesMap, setCategoriesMap] = useState({})
    
    useEffect(() => {
        
        const getData = async () => {
            
            const data = await getCategoriesAndDocuments()
            
            setCategoriesMap(data)
            
            
        }
        
        getData()
    }, [])

    const value = {categoriesMap}
    
    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
}
