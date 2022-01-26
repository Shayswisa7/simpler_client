import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDitailsUser as addDitailsUserAction,
  addOrder as addOrderAction,
} from '../redux/fullOrder';

export default function Cart(props) {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const fullOrder = useSelector((state) => state.fullOrder);
  const dispatch = useDispatch();
  console.log(props.nameClient);
  if (props.nameClient) {
    console.log('samting');
    dispatch(() => addOrderAction(Object.assign(itemsInOrder.obj)));
  }
  console.log('Cart', itemsInOrder.obj);
  console.log('full order', fullOrder.obj);
  var priceArray1 = [];
  for (let i in fullOrder.obj.price) {
    priceArray1[i] = JSON.stringify(Object.assign(fullOrder.obj.price[i]));
  }
  console.log(priceArray1, '+');
  return (
    <React.Fragment>
      <h1>Cart</h1>
      <div>
        <table key="invoice">
          <thead></thead>
          <tbody>
            <tr>
              <th>{fullOrder.obj.fullName}</th>
              {}:הזמנה על שם
              <br />
              <th>{fullOrder.obj.phoneNumber}</th>
              {}:מספר פלא
            </tr>
            {Object.keys(fullOrder.obj).map((key) => (
              <tr>
                <td>{key}:</td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
