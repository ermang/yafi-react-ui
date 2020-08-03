import React from 'react';
import Constant from './Constant';

class NewThread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
  } 

  onTextChange(event) {
    this.setState({text: event.target.value});
  }

  onSubmit() {
    console.log('login clicked');
    fetch( Constant.CREATE_THREAD_URL,  {
      method: "POST",
       body: JSON.stringify({"content": this.state.text, "topicId": this.props.topicId}),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'        
        // "Authorization": "Basic "  + btoa(this.props.username + ":" + this.props.password)
      //
     },
     credentials: 'include',}, null)
   // .then(response => response.json())
    .then(data => {console.log(data); this.setState({text: ''}); this.props.onNewThreadSubmitted();})
    //.then(data => this.onSignInSuccess());
    //this.setState({global: {signedIn: true}}); 
  }

  render() {     
     return <div className="container-fluid">
              <input type="text" value={this.state.text} onChange={this.onTextChange}></input>
              <button onClick={this.onSubmit} className="btn btn-primary">submit</button>
            </div>;
  }

}

export default NewThread;