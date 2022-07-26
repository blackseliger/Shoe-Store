import { createSlice } from "@reduxjs/toolkit";




const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        loading: false,
        error: null,
        recieveOffset: Number(process.env.REACT_APP_CATALOG_RECIEVE_OFFSET),
        recievedCount: Number(process.env.REACT_APP_CATALOG_RECIEVE_OFFSET),
        items: [],
        itemsOffset: null,
    },

    reducers: {
        request(state, action) {
            const offset = action.payload && action.payload.offset
            state.items = !offset ? [] : state.items
            state.loading = true
            state.error = null
        },
        // itemsReceivedCount(state, action) {
        //     state.recievedCount = action.payload;
        // },
        failure(state, action) {
            state.loading = false
            state.error = action.payload.error
        },
        success(state, action) {
            state.items.push(...action.payload);
            state.recievedCount = state.items.length
            state.loading = false
            state.error = null
            state.itemsOffset = action.payload.length ? true : false
        }
    }
})

const { actions, reducer } = catalogSlice;
export const { request, itemsReceivedCount, failure, success} = actions;
export default reducer;

