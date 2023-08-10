export const CategoryReducer = (state = {categories : [], isLoading: false, error: null}, action) => {
    const {type, payload} = action
    
    
    switch(type) {
        case "FETCH_CATAGORIES_START" :
            return {...state, isLoading: true}
        case "FETCH_CATAGORIES_SUCCESS" :
            return {...state, categories: payload, isLoading: false }
        case "FETCH_CATAGORIES_FAILED" :
            return { ...state, isLoading: false, error: payload}
        default :
            return state
    }
}
