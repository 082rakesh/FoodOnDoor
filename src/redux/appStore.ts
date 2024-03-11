import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
export type MainState = ReturnType<typeof appStore.getState>;
