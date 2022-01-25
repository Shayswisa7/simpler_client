import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Business from './menuBusiness';
import Cart from '../pages/cart';
import CreateUser from '../pages/createUser';
import NOTFOUND from '../pages/notFound';
import CreateOrder from './menuCreateOrder';
import SaveOrder from './menuSaveOrders';

const AllRoutesMenu = () => {
  return (
    <Routes>
      {/*Route of menu pages.*/}
      {/*Route of business pages.*/}
      <Route
        id="business"
        path="menu/business"
        element={<Business />}
        exact={true}
      ></Route>
      {/*Route of createOrder pages.*/}
      <Route
        id="createOrder"
        path="menu/createOrder"
        element={<CreateOrder />}
      />
      {/*Route of saveOrder pages.*/}
      <Route id="saveOrder" path="menu/saveOrder" element={<SaveOrder />} />

      <Route path="*" element={<NOTFOUND />} />
    </Routes>
  );
};
export default AllRoutesMenu;
