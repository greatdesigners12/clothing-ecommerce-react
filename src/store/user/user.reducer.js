import { createSlice } from "@reduxjs/toolkit"

export const userReducerReduxToolkit = createSlice({
    name: "user", // it's same with user/SET_CURRENT_USER. the name is user
    initialState: {currentUser: null, isLoading: false, error: null},
    reducers: {
        setCurrentUser(state, action){
            // you can mutate the state
            state.isLoading = false 
            state.currentUser = action.payload
            // all of those are same thing with {...state, isLoading: false, currentUser: payload}
        }
    }
})

// automatically generate action
export const {setCurrentUser} = userReducerReduxToolkit.actions
export const userReducer = userReducerReduxToolkit.reducer


export const UserReducer = (state = {currentUser: null, isLoading: false, error: null}, action) => {
    const {type, payload} = action 

    switch(type) {
        case 'SET_CURRENT_USER' :
            return {
                ...state, 
                currentUser: payload
            }
        case "PROCESS_SUCCESS" :
            return {...state, isLoading: false, currentUser: payload}
        case "PROCESS_FAILED" :
            return {...state, isLoading: false, error: payload}
        default :
            // it doesn't update, because state is default/previous value 
            return state
    }
}
