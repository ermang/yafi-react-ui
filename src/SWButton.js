import React from 'react';

function SWButton(props) { 

  function onClick() {
    console.log('Button clicked');
    console.log('props=', props)
    props.onClick();
  }
 
  if (props.enabled === true)     
    return (
    <div>             
      <button onClick={onClick} className="btn btn-primary">submit</button>
    </div>
    );
  else
  return (
    <div>
      <button onClick={onClick} className="btn btn-primary" disabled>submit</button>
    </div>
    );

}

export default SWButton;