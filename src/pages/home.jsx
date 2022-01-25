import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  //const itemsInOrder = useSelector((state) => state.items_in_order);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <a>
        hello {user.obj.firstName + ' ' + user.obj.lastName}!!! have nice
        buning!!!{' '}
      </a>{' '}
    </React.Fragment>
  );
};

export default Home;
