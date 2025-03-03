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
        completed: action.payload.completed,
        completedDate: action.payload.completedDate,
      });
    },
    markComplete: (state, action) => {
      const filterstate = state.habitsdata.find(
        (st) => st.id === action.payload
      );

      if (filterstate) {
        filterstate.completed = true;
        filterstate.completedDate = new Date().toLocaleString();
      }
    },

    removeHabit: (state, action) => {
      console.log(action.payload, "----id");
      const filterremove = state.habitsdata.filter(
        (hbt) => hbt.id !== action.payload
      );
      return { habitsdata: filterremove };
    },
    clearHabit: (state, action) => {
      return { habitsdata: [] };
    },
  },
});

export const { addHabit, removeHabit, markComplete, clearHabit } =
  habitSlice.actions;
export default habitSlice.reducer;
