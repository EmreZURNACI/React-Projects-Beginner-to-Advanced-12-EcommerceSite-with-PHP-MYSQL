import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
    basket: []
}
export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        getBasket: (state, actions) => {
            if (state.basket.length === 0) {
                state.basket = [...state.basket, { ...actions.payload, ...{ piece: 1 } }];
            }
            else {
                let temp = null;
                let indexTemp = null;
                state.basket.forEach((element, index) => {
                    if (element.name === actions.payload.name) {
                        temp = true;
                        indexTemp = index;
                    }
                });
                if (temp) {
                    state.basket[indexTemp].piece += 1;
                }
                else {
                    state.basket = [...state.basket, { ...actions.payload, ...{ piece: 1 } }];
                }
            }
        },
        clearBasket: (state) => {
            state.basket = [];
        },
        incItem: (state, actions) => {
            toast.success("Ürün başarıyla sepete eklendi",{
                duration:1500
            })
            state.basket.forEach((item) => {
                if (item.name === actions.payload.name) {
                    item.piece += 1;
                }
            })
        },
        descItem: (state, actions) => {
            state.basket.forEach((item, index) => {
                if (item.name === actions.payload.name) {
                    if (item.piece > 0) {
                        item.piece -= 1;
                    }
                    if (item.piece === 0) {
                        state.basket.splice(index, 1);
                    }
                }
            })
        }
    }
})
export default BasketSlice.reducer
export const { getBasket, clearBasket, incItem, descItem } = BasketSlice.actions