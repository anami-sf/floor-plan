import React from 'react';
import Oven from './Oven';
import Sink from './Sink';


function Kitchen(props) {
  return (
      <>
        <h1 id="kitchen">Kitchen</h1>
        <Oven />
        <Sink />
      </>

  );
}

// Must export the component's function (or class)
export default Kitchen;