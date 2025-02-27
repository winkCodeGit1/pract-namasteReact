import { createSlice } from "@reduxjs/toolkit";

const habitSlice = createSlice({
  name: "habit",
  initialState: {
    habitsdata: [],
  },
  reducers: {
    addHabit: (state, action) => {
      state.habitsdata.push({
        id: action.payload.id,
        name: action.payload.habitName,
        frequency: action.payload.frequency,
      });
    },
    // removeHabit: (state, action) => {
    //   state.habitsdata.pop();
    // },
    clearHabit: (state, action) => {
      return { habitsdata: [] };
    },
  },
});

export const { addHabit, removeHabit, clearHabit } = habitSlice.actions;
export default habitSlice.reducer;
