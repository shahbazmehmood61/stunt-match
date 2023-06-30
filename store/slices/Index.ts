import { stuntMen } from "@/dummy/doubles";
import { StuntMan, StuntState } from "@/types/double";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: StuntState = {
  data: stuntMen,
  acceptedDoubles: [],
  rejectedDoubles: [],
};

export const counterSlice = createSlice({
  name: "stunt",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    acceptDouble: (state, action: PayloadAction<{ data: StuntMan; currentIndex: number }>) => {
      state.acceptedDoubles = [...state.acceptedDoubles, action.payload.data];
      state.data = state.data.filter(
        (_: any, index: number) => index !== action.payload.currentIndex
      );
    },
    rejectDouble: (state, action: PayloadAction<{ data: StuntMan; currentIndex: number }>) => {
      state.rejectedDoubles = [...state.rejectedDoubles, action.payload.data];
      state.data = state.data.filter(
        (_: any, index: number) => index !== action.payload.currentIndex
      );
    },
    reset: (state) => {
      state.data = stuntMen;
      state.acceptedDoubles = [];
      state.rejectedDoubles = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { acceptDouble, rejectDouble, reset } = counterSlice.actions;

export default counterSlice.reducer;
