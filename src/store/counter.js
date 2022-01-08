import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//with  createSlice we create slice of our globle
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  //reducer is an obje ct, {a map} of all the reducers this slice needs
  //and here we are adding method to this object
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;


export default counterSlice.reducer;

