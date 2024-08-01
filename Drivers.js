import React from 'react';

function Drivers(props) {
  function handleClick() {
    alert('Clicked');
  }
  let buttons = props.drivers.map(driver => 
    <button onClick={handleClick}>
      {driver}
    </button>
  );
  return (
    <div>
      {buttons}
    </div>
  );
}

export default Drivers;