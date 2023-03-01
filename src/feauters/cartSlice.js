import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import wishlistApi from "../common/Api/wishlistApi";
const initialState = {
    cart: localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart")) : [],
}

export const fetchAsyncCart = createAsyncThunk(
    "photos/fetchAsyncCart",
    async() => {
        const response = await wishlistApi.get(`https://dummyjson.com/products`)
        return response.data;
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItem >= 0) {
                state.cart[existingItem].cartQuantity += 1;
                toast.info(`increased ${state.cart[existingItem].title} cart quantity`, {
                    position: "bottom-left",
                });
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1 };
                state.cart.push(tempProduct);
                toast.success(`${action.payload.title} added to cart`, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart(state, action) {
            const nextCart = state.cart.filter(
                (item) => item.id !== action.payload.id
            )
            state.cart = nextCart;
            localStorage.setItem('cart', JSON.stringify(state.cart))

            toast.error(`${action.payload.title} remove from cart`, {
                position: "bottom-left",
            });
        },
        decreaseCart(state, action) {
            const itemIndex = state.cart.findIndex(
                item => item.id === action.payload.id
            )
            if (state.cart[itemIndex].cartQuantity > 1) {
                state.cart[itemIndex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.title} cart quantity`, {
                    position: "bottom-left",
                });
            } else if (state.cart[itemIndex].cartQuantity === 1) {
                const nextCart = state.cart.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cart = nextCart;

                toast.error(`${action.payload.title} remove from cart`, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        clearCart(state, action){
            state.cart = [];
            toast.error(`Cart cleared`, {
                position: "bottom-left",
            });
            localStorage.setItem('cart', JSON.stringify(state.cart));
         },
         getTotals(state, action){
            let {total, quantity} = state.cart.reduce(
                (cartTotal, item)=>{
                const {price, cartQuantity} = item;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal;
            },
            {
                total: 0,
                quantity: 0,
            }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
         },
    },
});

export const { addToCart, removeFromCart, decreaseCart , clearCart , getTotals} = cartSlice.actions;

export default cartSlice.reducer;