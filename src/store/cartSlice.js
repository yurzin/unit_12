import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        },
        decrement: (state, data) => {
            let articul = data.payload;
            state.value[articul]--;
        },
        clearCart: (state, data) => {
            let articul = data.payload;
            state.value[articul] = 0;
        }
    }
});

export const {increment, decrement, clearCart} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;