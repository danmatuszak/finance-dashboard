import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"], // Key performance indicators
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/", // adds the query to the baseUrl and hits that endpoint
      providesTags: ["Kpis"],
    }),
  })
})

export const { useGetKpisQuery } = api; // pulls getKpis query out of the api