import { useState, useEffect } from "react";
import { createContext } from "react";
import {authStateListener } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}
    useEffect(() => {
        const unmount = authStateListener((user) => {
            setCurrentUser(user)    
        })

        return unmount;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

