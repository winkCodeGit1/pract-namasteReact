import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla(older) Redux => Don't mutate the state rather return is mandatory
      //   const newState = { ...state };
      //   newState.items.push(action.payload);

      //REdux Toolkit
      //It is an impure function and directly we are mutating the state
      // it is mandatory to write below like impure function
      //If we are mutating the state then what is redux doing behind the scenes?
      //Behind the scenes Redux is creating a mutatble state like the same in vanila(older) redux with the help of immer library.

      //How immer works?

      //Behind the scenes, Immer:

      // Creates a temporary draft of the state.
      // Lets you modify the draft it as if it's mutable.
      // Converts the draft into an immutable object and the returns a new immutable object / state.

      //Why we use immer library?
      //Simplifies state updates → No need to use spread operators (...) for deeply nested objects.
      // ✅ Ensures immutability → Prevents accidental state mutations.
      // ✅ Improves readability → Looks like normal JavaScript but maintains Redux principles.
      // ✅ Optimized performance → Uses structural sharing, updating only the parts of the state that changed.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      //RTK - either mutate the existing state or create a new state
      //   state.items.length = 0; ///originalstate = []
      //is also okay
      return { items: [] }; // this new object will be replaced inside originalstate = {items:["pizza"]}
    },
  },
});

console.log(cartSlice, "----cartslice");

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
