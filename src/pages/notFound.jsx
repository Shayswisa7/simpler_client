import React from 'react';
import { Link } from 'react-router-dom'

const NOTFOUND = () =>{
  return (
    <React.Fragment>
      
      <p>NOT FOUND 404!</p>
      <Link className='nav-link' to='/'>Go Home</Link>
      
    </React.Fragment>
  );
}
export default NOTFOUND;