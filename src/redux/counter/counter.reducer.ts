import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CounterInitialState = {
  count: number;
};
const counterInitialState: CounterInitialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(asyncIncrement.fulfilled, (state, action) => {
      state.count = state.count + action.payload;
    });
    builder.addCase(asyncDecrement.fulfilled, (state, action) => {
      state.count += action.payload;
    });
  },
});

export const selectCounterReducer = (state: RootState) => state.counter;
export const selectCounterReducerCount = createSelector(
  selectCounterReducer,
  (counter) => counter.count,
);

export const asyncIncrement = createAsyncThunk(`${counterSlice.name}/asyncIncrement`, async () => {
  return 1;
});
export const asyncDecrement = createAsyncThunk(`${counterSlice.name}/asyncDecrement`, async () => {
  return -1;
});
