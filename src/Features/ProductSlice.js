import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    filteredProducts: []
}
export const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, actions) => {
            state.products = actions.payload;
        },
        getFilteredProducts: (state, actions) => {
            state.filteredProducts = actions.payload;
        }
    }
})
export default ProductSlice.reducer
export const { getProducts,getFilteredProducts } = ProductSlice.actions