// import { useState, useEffect, useReducer } from "react";
// import { createContext } from "react";
// import {authStateListener } from "../utils/firebase/firebase.utils";


// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null
// })

// export const USER_ACTION_TYPES = {
//     'SET_CURRENT_USER' : 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) => {
//     const {type, payload} = action 

//     switch(type) {
//         case 'SET_CURRENT_USER' :
//             return {
//                 currentUser: payload
//             }
//         default :
//             throw new Error(`Unhandled type ${type}`)
//     }
// }


// export const UserProvider = ({children}) => {
//     // const [currentUser, setCurrentUser] = useState(null)

//     // state -> buat ambil data sebelumnya atau default (jika belum pernah set)
//     // dispatch -> function buat pass action (harus ada type dan payload)
//     // payload digunakan untuk pass data 
//     const [state, dispatch] = useReducer(userReducer, {currentUser: null})
//     const {currentUser} = state

//     const setCurrentUser = (user) => {
//         dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
//     }
//     const value = {currentUser, setCurrentUser}
//     useEffect(() => {
//         const unmount = authStateListener((user) => {
//             setCurrentUser(user)    
//         })

//         return unmount;
//     }, [])
//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }

