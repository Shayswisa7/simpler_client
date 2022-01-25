import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const item = useSelector((state) => state.itemsInOrder);
  //const dispatch= useDispatch();
  console.log('Cart', item.obj);

  return (
    <React.Fragment>
      <p>Cart</p>
      <button>+</button>
      <button>-</button>
    </React.Fragment>
  );
}
