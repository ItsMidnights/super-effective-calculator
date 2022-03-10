import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { LayoutType } from "../../types";

interface Layout {
  value: LayoutType;
}

export const initialState: Layout = {
  value: "mobile",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    update: (state, action: PayloadAction<LayoutType>) => {
      state.value = action.payload;
    },
  },
});

export const selectLayout = (state: RootState) => state.layout.value;
export const { update } = layoutSlice.actions;
