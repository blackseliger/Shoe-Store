import { createSlice } from "@reduxjs/toolkit";




const categoriesSlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        changeSelection(state, action) {
            const { id, selected } = action.payload;
            state.map((el) => {
                if (el.id === id) el.selected = selected;
            })
        },

        request: (state) => state,
        success(state, action) {
            state = action.payload;
            return state;
        },
    },
})




const { actions, reducer } = categoriesSlice;

export const { changeSelection, request, success } = actions;

export default reducer;