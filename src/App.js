import React, { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './pages/routingAppPages';
import NavbarApp from './components/navbarApp';
import { useDispatch, useSelector } from 'react-redux';
import { setValues, fetchItemsInOrders } from './redux/itemsInOrder';
import axios from 'axios';
import { postUser } from './redux/user';

function App() {
  //Creating instances of reducers..
  const user = useSelector((state) => state.user_reducer);
  const item = useSelector((state) => state.items_in_order);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(fetchItemsInOrders());
    dispatch(postUser());
    const instance = await axios.post('http://localhost:3001/CreateUser', {
      type: 'user',
      user: {
        firstName: 'yakir',
        lastName: 'lupu',
        mail: 'yakir@sjdfhsu.dsf',
        phoneNumber: '054848869',
        password: 'dfg',
        saveOrderList: [],
        friedsList: [],
      },
    });
    let itemsInProduct = instance.data;
    console.log(itemsInProduct);
  }, [dispatch]);
  //if (user.name === '') console.log('++'); //alert('go to login');
  return (
    <React.Fragment>
      <div className="App">
        <div className="">
          <NavbarApp />
        </div>
        <div className="">
          <AllRoutes />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
