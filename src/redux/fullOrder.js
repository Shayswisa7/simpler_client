import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postFullOrder = createAsyncThunk(
  'fullOrder_reducer/postFullOrder',
  async () => {
    const result = await axios.post(
      'http://localhost:3001/RestDataFormats_Obj',
      {
        type: 'FullOrder',
      }
    );
    return result.data;
  }
);
/*
"type": "FullOrder",
  "obj":{
  "fullName": "",
   "id_phoneNumber": "",
  "orders": [],
  "shipping": {},
  "orderTime": "18-02",
  "price": []
  }
  */
export const fullOrderSlice = createSlice({
  name: 'fullOrder_reducer',
  initialState: {
    obj: {},
    status: null,
  },
  reducers: {
    addDitailsUser: (state, action) => {
      state.obj[action.payload['key']] = action.payload['value'];
    },
    addOrder: (state, action) => {
      let order = action.payload;
      let prices = {};
      let sum = 0;
      for (let i in order) {
        if (i !== 'name')
          for (let j in order[i]) {
            sum += order[i][j].prices[order[i][j].pos];
            switch (i) {
              case 'breads':
                if (order[i][j].pos !== 0) prices.bread = j;
                break;
              case 'drink':
                if (order[i][j].pos !== 0) prices.drink = j;
                break;
              case 'extras':
                if (order[i][j].pos !== 0) prices.extra = j;
                break;
              case 'meat':
                if (order[i][j].pos !== 0) prices.meat = j;
                break;
              default:
                break;
            }
          }
      }
      prices.sumPrice = sum;
      state.obj.price.push(prices);
      state.obj.orders.push(order);
      state.obj.shipping = action.payload['shipping'];
    },
    editOrder: (state, action) => {
      for (let i in state.obj.orders) {
        if (state.obj.orders[i].name === action.payload['name']) {
          state.obj.orders[i] = action.payload;
        }
      }
    },
  },
  extraReducers: {
    [postFullOrder.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postFullOrder.fulfilled]: (state, action) => {
      state.obj = action.payload.obj;
      state.status = 'success';
    },
    [postFullOrder.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { addDitailsUser, addOrder, editOrder } = fullOrderSlice.actions;
export default fullOrderSlice.reducer;
