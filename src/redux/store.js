import { configureStore } from '@reduxjs/toolkit';
import fullOrder from './fullOrder';
import itemsInOrder from './itemsInOrder';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    itemsInOrder: itemsInOrder,
    user: userReducer,
    fullOrder: fullOrder,
  },
});
