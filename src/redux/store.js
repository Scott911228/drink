import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import iceReducer from './iceSlice';

// Part2: Combine Reducers and Create a Store
const store = configureStore({
   reducer: {
     cart: cartReducer,
     ice: iceReducer,
   },
   devTools: process.env.NODE_ENV !== 'production',
 });

//  export store to global
export default store;

