import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { multiplierAPI } from "./multiplierAPI";

const initialState = {
  value: 1,
  loading: true,
}

export const asyncMultiply = createAsyncThunk(
  'multiply/multiplierAPI',
  async (amount) => {
    const response = await multiplierAPI(amount);
    console.log(response);
    return response.data;
  }
)

export const multiplierSlice = createSlice({
  name: 'multiplier',
  initialState,
  reducers: {
    multiply: (state) => {
      state.value = state.value * 2;
    },
    divide: (state) => {
      state.value = state.value / 2;
    },
    multiplyBy: (state, action) => {
      state.value *= action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncMultiply.pending, (state) => {
        state.loading = true;
      })
      .addCase(asyncMultiply.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
  }
})

export const multiplierSliceActions = multiplierSlice.actions;

export const selectValue = (state) => state.multiplier.value;

export const multiplyIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectValue(getState());
  if (currentValue % 2 === 1) {
    dispatch(multiplierSliceActions.multiplyBy(amount));
  }
}

export default multiplierSlice.reducer;