import React, { useEffect, useState } from 'react';
import './CSS/App.css';
import AllRoutes from './pages/routingAppPages';
import NavbarApp from './components/NavbarApp/navbarApp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsInOrders as fetchItemsInOrdersAction } from './redux/itemsInOrder';
import { postUser as postUserAction } from './redux/user';
import { postFullOrder as postFullOrderAction } from './redux/fullOrder';

function App() {
  //Creating instances of reducers..
  const user = useSelector((state) => state.user_reducer);
  const item = useSelector((state) => state.items_in_order);
  const fullOrder = useSelector((state) => state.fullOrder);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(fetchItemsInOrdersAction());
    dispatch(postUserAction());
    dispatch(postFullOrderAction());
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
