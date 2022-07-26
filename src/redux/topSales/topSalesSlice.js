import { createSlice } from "@reduxjs/toolkit";


const topSalesSlice = createSlice({
    name: 'topSales',
    initialState: {
        loading: false,
        error: null,
        items: []
    },
    reducers: {
        request: (state) => {
            state.loading = true
            state.error = null
        },
        failure: (state, action) => {
            state.error = action.payload.error
            state.loading = false
        },
        success(state, action) {
            state.items = action.payload
            state.loading = false
            state.error = null
        }
    }
})


const { actions, reducer } = topSalesSlice;

export const { request, failure, success } = actions;
export default reducer;