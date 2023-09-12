import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products"],
    endpoints: (build) => ({
        getUser: build.query({
            // query: (id) => `general/user/${id}`,
            // responseHandler: (response) => response.text(),
            // providesTags: ["User"],
            query: (id) => ({
                url: `general/user/${id}`,
                providesTags: ["User"],
                responseHandler: (response) => response.text(),
              }),
        }),
        getProducts: build.query({
            query: () => ({
                url: `client/products`,
                providesTags: ["Products"],
              }),
        }),
    })
})

export const { useGetUserQuery, useGetProductsQuery } = api