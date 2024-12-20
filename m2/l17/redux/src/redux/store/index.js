import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import countReducer from "../reducers/count";
import cartReducer from "../reducers/cart";
import productsReducer from "../reducers/products";

const store = configureStore({
    reducer: {
        count: countReducer,
        shop: {
            cart: cartReducer,
            products: productsReducer
        }
    }
})

export default store