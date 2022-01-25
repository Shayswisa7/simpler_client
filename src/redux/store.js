import { configureStore } from '@reduxjs/toolkit';
import itemsInOrder from './itemsInOrder';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    itemsInOrder: itemsInOrder,
    user: userReducer,
  },
});
