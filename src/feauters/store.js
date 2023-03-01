import { configureStore } from "@reduxjs/toolkit";
import { getTotals } from "../feauters/cartSlice";
import wishlistReducer from './WishlistSlice/wishlistSlice';
import cartReducer from '../feauters/cartSlice';

export const store = configureStore({
    reducer:{
        gallery: wishlistReducer,
        cart: cartReducer
    }
})
store.dispatch(getTotals());