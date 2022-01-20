import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { set_OBJ_by_ID } from '../AllObjects/items_in_product';
import {
  createArrayPrices,
  decrement,
  increment,
  setValues,
} from '../redux/salads_per_serving';
const axios = require('axios');
const Home = () => {
  //const itemsInOrder = useSelector((state) => state.items_in_order);
  const user = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();

  /*useEffect(async () => {
    const instance = await axios.get(
      'http://localhost:3001/RestDataFormatsDataObj'
    );

    let itemsInProduct = instance.data;
    for (let i in itemsInProduct) {
      if (i !== '_id' && i != 'name') {
        console.log(i);
        dispatch(setValus({ key: i, value: itemsInProduct[i] }));
      }
    }
  });*/
  return (
    <React.Fragment>
      <button onClick={() => dispatch(createArrayPrices())}>+-+</button>
      <button
        onClick={() => dispatch(increment({ type: 'meat', name: 'burger' }))}
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement({ type: 'meat', name: 'burger' }))}
      >
        -
      </button>
      <a>hello {user.name}!!! have nice buning!!! </a>
    </React.Fragment>
  );
};

export default Home;
