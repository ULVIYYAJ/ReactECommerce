import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import wishlistApi from "../../common/Api/wishlistApi";
const initialState = {
    photos:[]
}

export const fetchAsyncCart = createAsyncThunk(
    "photos/fetchAsyncCart",
    async () => {
        const response = await wishlistApi.get(`https://dummyjson.com/products`)
        return response.data;
    }
)

export const wishlistSlice = createSlice({
    name: 'gallery',
    initialState,
    extraReducers:{
        [fetchAsyncCart.pending]: (state) => {
            state.isloading = true
        },
        [fetchAsyncCart.fulfilled]: (state, action) => {
            state.photos = action.payload;
            state.isloading = false;
        },
        [fetchAsyncCart.rejected]: (state) => {
            state.isloading = false
        },
    }
})

export default wishlistSlice.reducer;



