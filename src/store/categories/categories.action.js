import { CategoryActionType } from "./categories.types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";


export const setCategories = (categoriesArray) => ({type : CategoryActionType.SET_CATEGORIES_DATA, payload:categoriesArray})

export const fetchCategoriesStart = () => ({type : CategoryActionType.FETCH_CATAGORIES_START})

export const fetchCategoriesSuccess = (categoriesArray) => ({type : CategoryActionType.FETCH_CATAGORIES_SUCCESS, payload: categoriesArray})

export const fetchCategoriesFailed = (error) => ({type : CategoryActionType.FETCH_CATAGORIES_FAILED, payload: error})

export const fetchCategoriesAsync = () => async(dispatch) => {
    dispatch(fetchCategoriesStart())
    try { 
        const dataArray = await getCategoriesAndDocuments()
        dispatch(fetchCategoriesSuccess(dataArray))
    } catch(e) {
        dispatch(fetchCategoriesFailed(e))
    }
}