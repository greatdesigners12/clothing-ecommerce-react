import { USER_ACTION_TYPES } from "./user.types"

export const setCurrentUser = (user) => ({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})

export const checkUserSession = () => ({type:USER_ACTION_TYPES.CHECK_USER_SESSION})
export const googleSignInStart = () => ({type:USER_ACTION_TYPES.GOOGLE_SIGN_IN_START})
export const emailSignInStart = (email, password) => ({type:USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: {email, password}})
export const emailSignUpStart = (name, email, password) => ({type: USER_ACTION_TYPES.EMAIL_SIGN_UP_START, payload: {name, email, password}})
export const authSuccess = (user) => ({type: USER_ACTION_TYPES.PROCESS_SUCCESS, payload: user})
export const authFailed = (error) => ({type: USER_ACTION_TYPES.PROCESS_FAILED, payload: error})
export const signOut = () => ({type: USER_ACTION_TYPES.SIGN_OUT})


