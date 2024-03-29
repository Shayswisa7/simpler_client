import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Features/counter';
import Business from '../components/MenuBusiness/menuBusiness';
import CreateOrder from '../components/MenuCreateOrder/menuCreateOrder';
import SaveOrder from '../components/MenuSaveOrders/menuSaveOrders';
import NavbarMenu from '../components/NavbarApp/navbarMenu';
import AllRoutesMenu from '../components/NavbarApp/routingMenuPases';
import AllRoutes from './routingAppPages';

const Menu = () => {
  const item = useSelector((state) => state.itemsInOrder);
  const dispatch = useDispatch();
  const [typeMenu, setTypeMenu] = useState('dealOrder');
  return (
    <React.Fragment>
      <h3>Menu</h3>
      <div>
        <button
          className="btn-primary"
          onClick={() => setTypeMenu('createOrder')}
        >
          צור מנה
        </button>
        <button
          className="btn-primary"
          onClick={() => setTypeMenu('saveOrder')}
        >
          המנות שלך
        </button>
        <button
          className="btn-primary"
          onClick={() => setTypeMenu('dealOrder')}
        >
          עסקיות
        </button>
      </div>
      {typeMenu === 'dealOrder' ? <Business /> : ''}
      {typeMenu === 'saveOrder' ? <SaveOrder /> : ''}
      {typeMenu === 'createOrder' ? <CreateOrder /> : ''}
    </React.Fragment>
  );
};

export default Menu;
