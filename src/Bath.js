import React from 'react';

function Bath({size}) {
  return (
    
        <h1 id={`bath-${size}`}>{size} Bath</h1>
    
  );
}

// Must export the component's function (or class)
export default Bath;