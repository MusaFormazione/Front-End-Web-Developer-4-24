import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducers/count";
import cartReducer from "../reducers/cart";
import productsReducer from "../reducers/products";
//Dato che cartReducer e productsReducer andranno a collaborare per la creazione di un unico Slice dello Store, dobbiamo combinarli in un unico reducer e combineReducers è una funzione che ci permette di farlo. 
//La variabile shop di fatto conterrà un unico reducer con due proprietà: cart e products. 
const shop = combineReducers({
    cart: cartReducer,
    products: productsReducer
})

const store = configureStore({
    reducer: {
        count: countReducer,
        shop: shop
    }
})

export default store