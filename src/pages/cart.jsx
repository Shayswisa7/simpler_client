import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const item = useSelector((state) => state.items_in_order);
  //const dispatch= useDispatch();
  console.log('Cart', item);
  return (
    <React.Fragment>
      <p>Cart</p>
      <button>+</button>
      <button>-</button>
    </React.Fragment>
  );
}
