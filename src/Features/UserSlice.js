import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "",
    lastname: "",
    zipcode: "",
    city: "",
    state: "",
    cardName: "",
    cardNumber: "",
    cardDate: "",
    cardCVV: "",
    email: "",
    address: "Mrs. Edith LOOM 171 Union Street London SE1 0LN"
}
export const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setName: (state, actions) => {
            state.name = actions.payload;
        },
        setLastName: (state, actions) => {
            state.lastname = actions.payload;
        },
        setEmail: (state, actions) => {
            state.email = actions.payload;
        },
        setCity: (state, actions) => {
            state.city = actions.payload;
        },
        setState: (state, actions) => {
            state.state = actions.payload;
        },
        setZipCode: (state, actions) => {
            state.zipcode = actions.payload;
        },
        setCardName: (state, actions) => {
            state.cardName = actions.payload;
        },
        setCardNo: (state, actions) => {
            state.cardNumber = actions.payload;
        },
        setCardCvv: (state, actions) => {
            state.cardCVV = actions.payload;
        },
        setCardDate: (state, actions) => {
            state.cardDate = actions.payload;
        },
        setAdresse: (state, actions) => {
            state.address = actions.payload
        }
    }
})
export default UserSlice.reducer
export const { setName, setLastName, setEmail, setCity, setState, setZipCode, setAdresse, setCardName, setCardNo, setCardCvv, setCardDate } = UserSlice.actions