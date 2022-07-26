import { createSlice } from "@reduxjs/toolkit";

const catalogItemSlice = createSlice({
    name: 'catalogItem',
    initialState: {
        loading: false,
        error: null,
        item: null,
        quantity: 1,
        selectedSize: 0,
    },
    reducers: {
        setQuantity(state, action) {
            state.quantity = action.payload
        },
        selectSize(state, action) {
            state.selectedSize = action.payload
        },
        request(state)  {
            state.item = null
            state.loading = true
            state.error = null
        },

        failure(state, action) {
            state.loading = false
            state.error = action.payload.error
        },
        success(state, action) {
            state.item = action.payload
            state.loading = false
            state.error = null
        }
    }
})


const { actions, reducer} = catalogItemSlice;
export const { setQuantity, selectSize, request, failure, success} = actions;

export default reducer