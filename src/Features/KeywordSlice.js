import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    keyword: ""
}
export const KeywordSlice = createSlice({
    name: "keyword",
    initialState,
    reducers: {
        getKeyword: (state, actions) => {
            state.keyword = actions.payload;
        }
    }
})
export default KeywordSlice.reducer
export const { getKeyword } = KeywordSlice.actions