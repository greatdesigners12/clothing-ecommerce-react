import {compose, createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import {persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
// root reducer
import { rootReducer } from "./root-reducer"
import persistReducer from "redux-persist/es/persistReducer"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import {rootSaga} from "./root-saga"
import { configureStore } from "@reduxjs/toolkit"

// sagas flownya maybe, dimulai dari fire action dari UI lalu menuju reducers (kalo ndak ada langsung lanjut ke root-saga)
// nah di root saga, nanti lanjut ke saganya masing-masing, lalu ada takeLatest itu buat detect typenya
// kalo kedetect, jalanin algoritmanya spt biasa, lalu fire action atau dispatch lagi ke reducers
// bisa berulang atau lanjut update ke ui 

const persistConfig = {
    key: 'root', 
    storage,
    // user -> nama reducer di root-reducer (combine reducer)
    // blacklist -> reducer yang tidak dipersist
    // whitelist -> only reducers that you want to persist
    whitelist: ['cart', 'user']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

// custom middleware
// const custom = (store) => (next) => (action) => {
//     console.log("type : ", action.type)
//     console.log("payload : ", action.payload)
//     // state -> semua data yang tersimpen di redux
//     console.log("current state : ", store.getState())
//     next(action)
//     // below all of these code would be run, after the root reducer gets updated
//     console.log("new state : ", store.getState())

// }

// it gets run, before dispatch trigger the reducer
// const middleware = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean) # if you want to use thunk
const middleware = [process.env.NODE_ENV === "development" && logger, sagaMiddleware].filter(Boolean) // if you want to use saga

// const middleware = [process.env.NODE_ENV === "development" && logger].filter(Boolean)
 // logger only be used on development
// filter(Boolean) -> remove any element that false (boolean)


const composeEnhancers = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const composedEnhancers = composeEnhancers(applyMiddleware(...middleware))

// second parameter is default state
export const store = createStore(persistedReducer, undefined, composedEnhancers) // redux without toolkit

// with redux toolkit
// export const store = configureStore({
//     reducer: rootReducer,
//     // the default middleware of redux-toolkit are redux-thunk
//     middleware: middleware
// })

// modify default redux toolkit
// export const store = configureStore({
//     reducer: rootReducer,
//     // the default middleware of redux-toolkit are redux-thunk, non-serializable check (check if value passed into redux is serializable, if it's then reject it)
       // the last  default middleware of redux-toolkit is immutability check, it means you can't directly change the value of value that you get from useSelector
//     middleware: (defaultMiddleware) => {
            // defaultMiddleware is array of default middlewares. So if you want to combine with custom middleware, just concat it
//          return defaultMiddleware({serializableCheck: false}) // it seems react toolkit doesn't allow you to pass object payload (it must be like int, string, and anything else). Just make it false, to turn off it
//      }
// })

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

