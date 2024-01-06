import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  // credentials: 'include',
  // prepareHeaders(headers, api) {
  //   const sig = (api.getState() as RootState).auth.signature;
  //   if (sig) {
  //     if (sig.accessToken) {
  //       headers.set('Authorization', `${sig.type} ${sig.accessToken}`);
  //     }
  //   }
  //   return headers;
  // },
});

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery,

  tagTypes: [],

  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    getPostList: builder.query({
      query: () => '/posts',
    }),
    getPostById: builder.query<unknown, { id: number }>({
      query: (args) => `/posts/${args.id}`,
    }),
  }),
});
