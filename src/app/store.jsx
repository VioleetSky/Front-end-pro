import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../features/apiSlice.jsx";
import categoryReducer from "../features/categorySlice.jsx";
import basketSlice from "../features/basketSlice.jsx";

export const store = configureStore({
reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    category: categoryReducer,
    basket: basketSlice
},
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware)
})