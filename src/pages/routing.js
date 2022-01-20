import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './cart';
import CreateUser from './createUser';
import Home from './home';
import Login from './login';
import Menu from './menu';
import NOTFOUND from './notFound';
import UserPage from './userPage';

const AllRoutes = () => {
  return (
    <Routes>
      {/*Route of cart page.*/}
      <Route id="cart" path="/Cart" element={<Cart />} />
      {/*Route of createUser page.*/}
      <Route
        id="createUser"
        path="/CreateUser"
        element={<CreateUser />}
      ></Route>
      {/*Route of home page.*/}
      <Route id="home" path="/" element={<Home />} exact={true}></Route>
      {/*Route of login page.*/}
      <Route id="login" path="/Login" element={<Login />}></Route>
      {/*Route of menu page.*/}
      <Route id="menu" path="/Menu" element={<Menu />}></Route>
      {/*Route of userPage.*/}
      <Route id="userPage" path="/UserPage" element={<UserPage />}></Route>
      {/*Route of NOTFOUND page.*/}
      <Route path="*" element={<NOTFOUND />} />
    </Routes>
  );
};
export default AllRoutes;
