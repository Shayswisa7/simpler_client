import { configureStore } from '@reduxjs/toolkit';
import salads_per_serving from './salads_per_serving';
import user_reducer from './user';

export const store = configureStore({
  reducer: {
    items_in_order: salads_per_serving,
    user_reducer: user_reducer,
  },
});
