import React from 'react';
import Counter from './counter';
const Item = ({name})=>{
  return(<React.Fragment>
    <div key={name} className='card'>
      <div>
      <Counter/>
      </div>
    </div>
  </React.Fragment>);
}

export default Item;