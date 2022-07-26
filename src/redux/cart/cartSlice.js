import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem('cart')) || [],
    reducers: {
        addItem(state, action) {
            const { item, quantity } = action.payload;
            const found = state.find((el) => (el.item.id === item.id) && (el.item.size === item.size));
            if (found) {
                state.map((el) => {
                    if (el.item.key === found.item.key) el.quantity += quantity
                })
            } else {
                state.push(
                    {
                        item: { ...item, key: `${item.id}/${item.size}` },
                        quantity,
                    })
            }

        },
        removeItem(state, action) {
            const { key } = action.payload;
            if (state.find((el) => (el.item.key === key)).quantity <= 0) {
                return state.filter((el) => el.item.key !== key)
            } else {
                state.map((el) => {
                    if (el.item.key === action.payload.key) el.quantity -= 1;
                })
            }

        },
        clear() {
            return []
        }
    }
})

const { actions, reducer } = cartSlice;

export const { addItem, removeItem, clear } = actions;
export default reducer