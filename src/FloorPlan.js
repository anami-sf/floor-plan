import React from 'react';
import Bath from './Bath'
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';

function FloorPlan(props) {

  return (
      <div id="floor-plan">
        <Kitchen />
        <Bath size="Full" />
        <LivingRoom />
        <Bedroom bNum='1' />
        <Bedroom bNum='2' />
        <Bedroom bNum='3' />
        <Bath size="Half" />
      </div>

  );
}

// Must export the component's function (or class)
export default FloorPlan;