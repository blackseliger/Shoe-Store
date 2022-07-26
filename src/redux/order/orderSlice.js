import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: false,
        error: null,
        success: false,
        phone: '',
        address: '',
        data: null,
    },
    reducers: {
        setPhone(state, action) {
            state.phone = action.payload
        },
        setAddress(state, action) {
            state.address = action.payload
        },
        submitRequest(state, action) {
            state.data = action.payload
            state.loading = true
            state.error = null
        },
        submitFailure(state, action) {
            state.error = action.payload.error
            state.loading = false
        },
        submitSuccess(state) {
            state.loading = false
            state.error = null
            state.success = true
        },
        reset(state) {
            state.loading = false
            state.error = null
            state.success = false
        }
    }
})

const { actions, reducer } = orderSlice;
export const { reset, setPhone, setAddress, submitRequest, submitFailure, submitSuccess } = actions;
export default reducer;