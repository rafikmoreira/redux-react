import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: number;
};

const getInitialState = (): InitialState => {
  const initialState = localStorage.getItem("reducer-teste:counter");

  if (initialState && initialState != "undefined" && initialState != "null") {
    return JSON.parse(initialState);
  }

  return {
    value: 0,
  };
};

const counterSlice = createSlice({
  name: "counter",
  initialState: getInitialState(),
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementValue: (state, action) => {
      state.value = +state.value + action.payload;
    },
  },
});

export const { decrement, increment, incrementValue } = counterSlice.actions;

export default counterSlice.reducer;
