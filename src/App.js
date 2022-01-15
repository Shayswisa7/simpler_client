import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './components/item';
import AllRoutes from './pages/routing';
import Navbar from './components/navbar';
import ImageHome from './components/imageHome';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/login';
function App() {
  //Creating instances of reducers..
  const item = useSelector((state) => state.items_in_order);
  const user = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();
  if (user.name === '') console.log('++'); //alert('go to login');
  return (
    <React.Fragment>
      <Navbar item={item} user={user} dispatch={dispatch} />
      <AllRoutes />
    </React.Fragment>
  );
}

export default App;
