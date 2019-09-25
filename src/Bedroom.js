import React from 'react';
function Bedroom({bNum}) {
  return (
    <div id={`bed-${bNum}`}>          
        <h1>Bedroom {bNum}</h1>
    </div>
  );
}

// Must export the component's function (or class)
export default Bedroom;