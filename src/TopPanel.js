import React from 'react';
import Constant from './Constant'

class TopPanel extends React.Component {
  constructor(props) {
    super(props);    
    this.onLogin = this.onLogin.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignInSuccess = this.onSignInSuccess.bind(this);
  }  

  componentDidMount() {
  }

  onSignInSuccess() {
    this.props.onSignInSuccess();
  }

  onLogin() {
    console.log('login clicked');
    fetch( Constant.LOGIN,  {
      method: "POST",
      // body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': true,
        "Authorization": "Basic "  + btoa(this.props.username + ":" + this.props.password)
      },
      credentials: 'include',}, null)
   // .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => this.onSignInSuccess());
    //this.setState({global: {signedIn: true}});    
  }

  onUsernameChange(event) {
    this.props.onUsernameChange(event);
  }

  onPasswordChange(event) {
    this.props.onPasswordChange(event);
  }

  render() {    
    if (this.props.signedIn === false)
     return <div className="container-fluid"> 
              yafi
              <div className="row justify-content-end"> 
                <label>username:</label>
                <input type="text" value={this.props.username} onChange={this.onUsernameChange}></input>
                <label>password:</label>
                <input type="password" value={this.props.password} onChange={this.onPasswordChange}></input>
                <button onClick={this.onLogin} className="btn btn-primary">sign in</button>
                <button className="btn btn-primary">sign up</button>
              </div>
            </div>;
    else
      return <div>Welcome {this.props.username}</div>  
  }

}

export default TopPanel;