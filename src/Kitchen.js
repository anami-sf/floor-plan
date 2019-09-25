import React from 'react';
import Oven from './Oven';
import Sink from './Sink';


function Kitchen(props) {
  return (
      <>
        <div id="kitchen">
            <h1>Kitchen</h1>
        </div>
        <Oven />
        <Sink />
      </>

  );
}

// Must export the component's function (or class)
export default Kitchen;