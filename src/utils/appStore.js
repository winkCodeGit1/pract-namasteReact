import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import habitReducer from "./habitSlice";

/// redux dev tools chrome extension
const appStore = configureStore({
  //when we create a store using redux toolkit then below reducer is the only one reducer which is the main and it can contains many more reducers. that means a store can have one main or parent reducer.

  //Reducer is a combination of smaller individual reducer functions.
  reducer: {
    //for each slice there is individual reducer
    cart: cartReducer,
    habit: habitReducer,
  },
});

export default appStore;
