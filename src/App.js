import React, { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './pages/routing';
import Navbar from './components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setValues, fetchItemsInOrders } from './redux/salads_per_serving';
import axios from 'axios';

function App() {
  //Creating instances of reducers..
  //const item = useSelector((state) => state.items_in_order);
  const user = useSelector((state) => state.user_reducer);
  const item = useSelector((state) => state.items_in_order);
  const dispatch = useDispatch();
  /* useEffect(async () => {
    dispatch(fetchItemsInOrders());
  }, []);
  console.log(window.localStorage['sd'] || 'shay');*/
  useEffect(async () => {
    var instance = await axios.post(
      'http://localhost:3001/RestDataFormats_Obj',
      {
        type: 'OrdersOBJ',
      }
    );

    let itemsInProduct = instance.data.obj;
    console.log(itemsInProduct);
  }, []);
  //if (user.name === '') console.log('++'); //alert('go to login');
  return (
    <React.Fragment>
      <Navbar />
      <AllRoutes />
    </React.Fragment>
  );
}

export default App;
