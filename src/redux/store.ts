import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter/counter.reducer';
import { apiSlice } from './api/api.reducer';

export type AsyncStatus = 'idle' | 'loading' | 'fulfilled' | 'rejected';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
