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
      <button onClick={onClick} className="btn btn-primary">{props.text}</button>
    </div>
    );
  else
  return (
    <div>
      <button onClick={onClick} className="btn btn-primary" disabled>{props.text}</button>
    </div>
    );

}

export default SWButton;