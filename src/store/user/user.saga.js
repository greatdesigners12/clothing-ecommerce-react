import {takeLatest, put, all, call} from "redux-saga/effects"
import { USER_ACTION_TYPES } from "./user.types"
import { authSuccess, authFailed } from "./user.action"
import { SignIn, createUserBasic, getCurrentUser, insertUserData, signInWithGooglePopup, signOutFunc } from "../../utils/firebase/firebase.utils"

export function* fetchUserSessionAsync() {
    try{
        const currentUser = yield call(getCurrentUser)
        if(!currentUser) return;
        console.log(currentUser)
        yield put(authSuccess(currentUser))

    }catch(e){
        yield put(authFailed(e))
    }
}

export function* createUserDocument(user, additional){
    try{
        const userDoc = yield call(insertUserData, user, additional)
        console.log(userDoc)
        yield put(authSuccess({id: userDoc.id}))
    }catch(e){
        yield put(authFailed(e))
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield call(signInWithGooglePopup)
        yield put(authSuccess(user))
    }catch(e){
        yield put(authFailed(e))
    }
}

export function* signInWithEmail(action){
    try{
        const {user} = yield call(SignIn, action.email, action.password)
        yield put(authSuccess(user))
    }catch(e){
        yield put(authFailed(e))
    }
}

export function* signOut(){
    try{
        yield call(signOutFunc)
        yield put(authSuccess(null))
    }catch(e){
        yield put(authFailed(e))
    }
}

export function* signUpWithEmail(action){
    try{
        const {payload} = action
        const {user} = yield call(createUserBasic, payload.email, payload.password)
        yield call(createUserDocument, user, {"displayName":payload.name})
    }catch(e){
        yield put(authFailed(e))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, fetchUserSessionAsync)
}

export function* signInGoogleChecker(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onEmailSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, signUpWithEmail)
}

export function* onSignOut(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT, signOut)
}


export function* userSagas(){
    yield all([call(onCheckUserSession), call(signInGoogleChecker), call(onEmailSignInStart), call(onEmailSignUpStart), call(onSignOut)])
}