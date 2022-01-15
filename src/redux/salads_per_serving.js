import { createSlice } from '@reduxjs/toolkit';
import { get_OBJ_by_ID, getPrice } from '../AllObjects/items_in_product';
import price_per_serving from '../AllObjects/price_per_serving';
let type;
let name;
let anount;
export const items_in_order_Slice = createSlice({
  name: 'salads_per_serving',
  initialState: {
    //
    salads: get_OBJ_by_ID('salads'),
    sauces: get_OBJ_by_ID('sauces'),
    breads: get_OBJ_by_ID('breads'),
    meat: get_OBJ_by_ID('meat'),
    drink: get_OBJ_by_ID('drink'),
    prices_of_servings_array: [],
  },
  reducers: {
    //prices_of_servings_array
    create_Array_Prices: (state) => {
      let sum = 0;
      let meatType,
        breadType = 'burger_bun';
      for (let i in state.salads) {
        sum += state.salads[i].prices[state.salads[i].pos];
      }
      for (let i in state.sauces) {
        sum += state.sauces[i].prices[state.sauces[i].pos];
      }
      for (let i in state.breads) {
        if (state.breads[i].pos > 0) breadType = i;
        sum += state.breads[i].prices[state.breads[i].pos];
      }
      for (let i in state.meat) {
        meatType = i;
        sum += state.meat[i].prices[state.meat[i].pos];
      }
      for (let i in state.drink) {
        sum += state.drink[i].prices[state.drink[i].pos];
      }
      let new_Price_Obj = Object.assign({}, price_per_serving);
      new_Price_Obj.bread = breadType;
      new_Price_Obj.meat = meatType;
      new_Price_Obj.price = sum;
      console.log(new_Price_Obj);
    },
    decrement: (state, action) => {
      type = action.payload['type'];
      name = action.payload['name'];
      anount = state[type][name].pos;
      switch (type) {
        case 'salads':
          //If the product is in (out) condition. The situation resets and becomes a state (without)
          if (anount === 4) state.salads[name].pos = 0;
          //Reduction of quantities
          else if (anount > 0) state.salads[name].pos--;
          break;
        case 'sauces':
          //If the product is in (out) condition. The situation resets and becomes a state (without)
          if (anount === 4) state.sauces[name].pos = 0;
          //Reduction of quantities
          else if (anount > 0) state.sauces[name].pos--;
          break;
        case 'breads':
          //If the product is in (out) condition. The situation resets and becomes a state (without)
          if (anount === 4) state.breads[name].pos = 0;
          //Reduction of quantities
          else if (anount > 0) state.breads[name].pos--;
          break;
        case 'meat':
          //Reduction of quantities
          if (anount > 0) state.meat[name].pos--;
          break;
        default:
          throw Error();
      }
    },
    //Raising quantities
    increment: (state, Action) => {
      type = Action.payload['type'];
      name = Action.payload['name'];
      switch (type) {
        //for salads
        case 'alads':
          if (state.salads[name].pos < 3) state.salads[name].pos++;
          break;
        //for sauces
        case 'sauces':
          if (state.sauces[name].pos < 3) state.sauces[name].pos++;
          break;
        //for breads
        case 'breads':
          if (state.breads[name].pos < 1) state.breads[name].pos++;
          break;
        case 'meat':
          //Reduction of quantities
          if (state.meat[name].pos < 2) state.meat[name].pos++;
          break;
        default:
          console.log('error');
          break;
      }
    },
    //Adding a product, default to an added product will get the value 2 (classic)
    addItem: (state, Action) => {
      type = Action.payload['type'];
      name = Action.payload['name'];
      switch (type) {
        case 'salads':
          if (state.salads[name].pos === 0) state.salads[name].pos = 2;
          break;
        case 'sauces':
          if (state.sauces[name].pos === 0) state.sauces[name].pos = 2;
          break;
        case 'breads':
          if (state.sauces[name].pos === 0) state.sauces[name].pos = 2;
          break;
        default:
          console.log('error');
          break;
      }
    },
    //Method (aside) initializes the product value to be 4 (side)
    aside: (state, Action) => {
      type = Action.payload['type'];
      name = Action.payload['name'];
      switch (type) {
        case 'salads':
          if (state.salads[name].pos !== 4) state.salads[name].pos = 4;

          break;
        case 'sauces':
          if (state.sauces[name].pos === 0) state.sauces[name].pos = 4;
          break;
        default:
          console.log('error');
          break;
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, clear, create_Array_Prices } =
  items_in_order_Slice.actions;
export default items_in_order_Slice.reducer;
