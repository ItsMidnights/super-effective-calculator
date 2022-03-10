import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
import { layoutSlice } from "./layout.slice";

const store = configureStore({
  reducer: {
    layout: layoutSlice.reducer,
  },
  devTools: __DEV__,
  // enhancers: [devToolsEnhancer({})]
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
