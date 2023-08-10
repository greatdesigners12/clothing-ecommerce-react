import {all, call} from 'redux-saga/effects'
import { categoriesSaga } from './categories/categoy.saga'
import { userSagas } from './user/user.saga'

export function* rootSaga(){
    // all digunakan untuk menjalankan saga secara parallel
    yield all([call(categoriesSaga), call(userSagas)])
}