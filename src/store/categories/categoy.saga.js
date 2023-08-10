import { takeLatest, all, call, put } from "redux-saga/effects"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { fetchCategoriesFailed, fetchCategoriesSuccess } from "./categories.action"
import { CategoryActionType } from "./categories.types"

export function* fetchCategoriesAsync(){
    try { 
        // buat penggunaan yield, bisa check file notes.js di project ini (diluar folder src)
        // call digunakan untuk memerintahkan middleware memanggil function yang mereturn promises
        const dataArray = yield call(getCategoriesAndDocuments)
        yield put(fetchCategoriesSuccess(dataArray))
    } catch(e) {
        // put() -> to dispatcj 
        console.log(e)
        yield put(fetchCategoriesFailed(e))
    }
}

export function* onFetchCategories(){
    // take latest ambil CategoryActionType.FETCH_CATAGORIES_START terakhir atau paling update
    yield takeLatest(CategoryActionType.FETCH_CATAGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga(){
     // all digunakan untuk menjalankan saga secara parallel
    yield all([call(onFetchCategories)])
}