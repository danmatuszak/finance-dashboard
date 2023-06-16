import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from './types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"], // Key performance indicators
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/", // adds the query to the baseUrl and hits that endpoint
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({// build.mutation for post
      query: () => "product/products/", // adds the query to the baseUrl and hits that endpoint
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({// build.mutation for post
      query: () => "transaction/transactions/", // adds the query to the baseUrl and hits that endpoint
      providesTags: ["Transactions"],
    }),
    // a way to auto query the results after altering table with delete
    // so the frontend will stay updated
    // deleteProduct:
    //   invalidateTag: ["Products"]
  })
})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api; // pulls getKpis query out of the api