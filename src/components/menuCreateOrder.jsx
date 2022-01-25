import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Counter from './counter';
import { setValuesByKey } from '../redux/user';
import { setValues } from '../redux/itemsInOrder';
import { NavLink } from 'react-router-dom';
const CreateOrder = () => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const dispatch = useDispatch();
  let categoryNameArray = [];
  for (let i in itemsInOrder.obj) {
    if (i !== 'name') categoryNameArray.push(i);
  }
  const getNames = (i) => {
    let itemsNamesArray = [];
    for (let j in itemsInOrder.obj[i]) {
      if (i !== 'name') itemsNamesArray.push(j);
    }
    return itemsNamesArray;
  };

  return (
    <React.Fragment>
      <div className="container">
        <input type="input" id="nameOrder"></input>
        <label for="nameOrder">שם המנה</label>
        {categoryNameArray.map((cName) => (
          <table className="">
            <header></header>
            <tr>
              <th>{cName}</th>
              <th>מחיר</th>
              <th>מצב</th>
            </tr>
            {getNames(cName).map((iName) => (
              <tr>
                <td>{iName}</td>
                <td>
                  {
                    itemsInOrder.obj[cName][iName].prices[
                      itemsInOrder.obj[cName][iName].pos
                    ]
                  }
                </td>
                <td>{itemsInOrder.obj[cName][iName].pos}</td>
                <td>
                  <Counter type={cName} name={iName}></Counter>
                </td>
              </tr>
            ))}
          </table>
        ))}
        <NavLink
          to="/cart"
          onClick={() =>
            dispatch(
              setValues({
                key: 'name',
                value: document.getElementById('nameOrder').value,
              })
            )
          }
        >
          הוסף להזמנות
        </NavLink>
      </div>
    </React.Fragment>
  );
};
export default CreateOrder;

/*<div className="container">
        {console.log(categoryNameArray)}
        {categoryNameArray.map((cName) => (
          <table className="">
            {cName === 'name' ? (
              <th>
                <imput className="input"></imput>
              </th>
            ) : (
              ''
            )}
            <tr>
              <th>{cName}</th>
              <th>מחיר</th>
              <th>מצב</th>
            </tr>
            {getNames(cName).map((iName) => (
              <tr>
                <td>{iName}</td>

                <td>
                  <Counter type={cName} name={iName}></Counter>
                </td>
              </tr>
            ))}
          </table>
        ))}
      </div> */
