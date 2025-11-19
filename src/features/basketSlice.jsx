import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: []
};

const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            const existed = state.basket.find(item => item.id === product.id);

            if (existed) {
                existed.counter += 1;
                existed.price += existed.price;
            } else {
                state.basket.push({ ...product, counter: 1 });
            }
        },

        deleteProduct: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload);
        },
        incrementCounter: (state, action) => {
            const item = state.basket.find(p => p.id === action.payload);
            if (item) item.counter += 1;
        },
        decrementCounter: (state, action) => {
            const item = state.basket.find(p => p.id === action.payload);
            if (item && item.counter > 1) item.counter -= 1;
        }

    }
});

export const { addProduct, deleteProduct, decrementCounter, incrementCounter } = basketSlice.actions;
export default basketSlice.reducer;
