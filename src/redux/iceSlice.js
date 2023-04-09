import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = { iceItems: [] };
const iceSlice = createSlice({
  name: 'ice',
  initialState,
  reducers: {
    addiceItems: (state, action) => {
      const item = action.payload;
      const product = state.iceItems.find((x) => x.id === item.id);
      if (!!product) {
         const iceItems = state.iceItems.map((x) =>
            x.id === product.id ? item : x
         );
         state.iceItems = iceItems;
      } else {
        state.iceItems = [...state.iceItems, item];
      }
    },
    removeiceItems: (state, action) => {
      state.iceItems = state.iceItems.filter((x) => x.id !== action.payload);
    },
  },
});

// export state to global
export const selecticeItems = (state) => state.ice.iceItems;

// export actions to global
export const { addiceItems, removeiceItems } = iceSlice.actions;

// export reducer to global
export default iceSlice.reducer;
