import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/data/2.5/forecast?lat=-6.732023&lon=108.552315&appid=88d6a0a13c818b801307e7c3a44de3da',
    }),
  }),
})
export const { useGetPostsQuery } = apiSlice