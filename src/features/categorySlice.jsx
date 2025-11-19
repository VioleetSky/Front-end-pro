import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    maxPrice: null,
    minPrice: null,
    selectedCategory: null
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        updateCategory(state, action) {
            state.maxPrice = action.payload.maxPrice;
            state.minPrice = action.payload.minPrice;
            state.selectedCategory = action.payload.category;
        }
    }
});

export const { updateCategory } = categorySlice.actions;
export default categorySlice.reducer;
