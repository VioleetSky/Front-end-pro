import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice=createApi({
reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com"}),
    endpoints:(builder) =>({
    getPosts: builder.query({
        query: ()=>"/products"
    }),
    getPostsByCategory: builder.query({
        query:(category)=>`products/category/${category}`
    }),
    getPostsById:  builder.query({
        query:(id)=>`products/${id}`
    })
}),
})
export const {useGetPostsQuery, useGetPostsByCategoryQuery, useGetPostsByIdQuery} = apiSlice;