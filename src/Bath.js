import React from 'react';


function Bath({size}) {
  return (
    <div id={`bath-${size}`}>
        <h1>{size} Bath</h1>
    </div>
        
    
  );
}

// Must export the component's function (or class)
export default Bath;