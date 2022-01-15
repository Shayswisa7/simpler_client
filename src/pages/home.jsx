import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  create_Array_Prices,
  decrement,
  increment,
} from '../redux/salads_per_serving';
const axios = require('axios');
const Home = () => {
  //const [image, setImage] = useState(window.location.pathname.toString());
  const user = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();
  const itemsInOrder = useSelector((state) => state.items_in_order);
  useEffect(async () => {
    const instance = await axios.get('http://localhost:3001/');

    let itemsInProduct = instance.data[1];
    //console.log(itemsInProduct);
  });
  return (
    <React.Fragment>
      <button onClick={() => dispatch(create_Array_Prices())}>+-+</button>
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
