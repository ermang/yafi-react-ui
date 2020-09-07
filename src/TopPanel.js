import React, {useState, useEffect} from 'react';
import Constant from './Constant'
import SWButton from './SWButton'

function TopPanel(props) {  

  const [signInButtonEnabled, setSignInButtonEnabled] = useState(false);

  useEffect(() => {
    if (props.username.length > 1 && props.password.length > 1)
      setSignInButtonEnabled(true);
    else
      setSignInButtonEnabled(false);
  }, [props.username, props.password]);

  function onSignInSuccess() {
    props.onSignInSuccess();
  }

  function onLogin() {
    console.log('login clicked');
    fetch( Constant.LOGIN,  {
      method: "POST",
      // body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': true,
        "Authorization": "Basic "  + btoa(props.username + ":" + props.password)
      },
      credentials: 'include',}, null)
   // .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => onSignInSuccess());
    //this.setState({global: {signedIn: true}});    
  }

  function onUsernameChange(event) {
    props.onUsernameChange(event);      
  }

  function onPasswordChange(event) {
    props.onPasswordChange(event)  
  }  

  if (props.signedIn ===false)
    return (   
        <div className="container-fluid">                
          <div className="row justify-content-end  align-items-center"> 
            <label className="col justify-content-start">yafi</label>
            <label className="col-auto">username:</label>
            <input className="col-auto pl-0 pr-0" type="text" value={props.username} onChange={onUsernameChange}></input>
            <label className="col-auto">password:</label>
            <input className="col-auto pl-0 pr-0" type="password" value={props.password} onChange={onPasswordChange} ></input>               
            <SWButton enabled={signInButtonEnabled} onClick={onLogin} text={'sign in'} className="col-auto"></SWButton>
            <SWButton enabled={true} text={'sign up'} className="col-auto"></SWButton>
          </div>
        </div>
    );
  else 
      return (
        <div className="container-fluid">
          <div className="row justify-content-end align-items-center"> 
          <label className="col-auto">Welcome {props.username}</label>
          </div>
        </div>
      );
        
}

export default TopPanel;