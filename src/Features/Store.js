import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from './ProductSlice'
import KeywordReducer from './KeywordSlice'
import BasketReducer from './BasketSlice'
import UserReducer from './UserSlice'
export const Store = configureStore({
    reducer: {
        ProductReducer: ProductReducer,
        KeywordReducer: KeywordReducer,
        BasketReducer: BasketReducer,
        UserReducer: UserReducer
    }
})