// import { createContext, useEffect, useState, useReducer } from "react"
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils"


// export const CategoryContext = createContext({
//     categoriesMap: {},
// })

// const CategoryContextType = {
//     SET_CATEGORIES_DATA:  "SET_CATEGORIES_DATA"
// }

// const CategoryReducer = (state, action) => {
//     const {type, payload} = action
//     switch(type) {
//         case "SET_CATEGORIES_DATA" :
//             return payload
//         default :
//             throw Error("Invalid type on category reducer")
//     }
// }

// export const CategoriesProvider = ({children}) => {
   
//     // const [categoriesMap, setCategoriesMap] = useState({})
//     const [state, dispatch] = useReducer(CategoryReducer, {})
    
//     useEffect(() => {
        
//         const getData = async () => {
            
//             const data = await getCategoriesAndDocuments()
            
//             dispatch({type : CategoryContextType.SET_CATEGORIES_DATA, payload : data})
            
            
//         }
        
//         getData()
//     }, [])

//     const value = {categoriesMap: state}
    
//     return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
// }
