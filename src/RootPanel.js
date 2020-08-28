import React from 'react';
import MainPanel from './MainPanel'
import LeftPanel from './LeftPanel'
import TopPanel from './TopPanel'

class RootPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {signedIn: false, username: '', password: '', topicId: 0};    
    this.onSignInSuccess = this.onSignInSuccess.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onTopicClick = this.onTopicClick.bind(this);
  }

  componentDidMount() {
  } 

  onSignInSuccess() {
    this.setState({signedIn: true});
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value});  
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  onTopicClick(topicId) {
    this.setState({topicId: topicId})
  }

  render() {     
     return <div className="container-fluid">      
     <div className="row">
       <TopPanel signedIn={this.state.signedIn}
                 onSignInSuccess={this.onSignInSuccess}
                 onUsernameChange={this.onUsernameChange}
                 onPasswordChange={this.onPasswordChange}
                 username={this.state.username}
                 password={this.state.password}/>
     </div>
     <div className="row">  
       <div className="col-2">    
         <LeftPanel topicClicked={this.onTopicClick}/>
       </div>
       <div className="col">
         <MainPanel signedIn={this.state.signedIn}
                    username={this.state.username}
                    password={this.state.password}
                    topicId={this.state.topicId}
                    onTopicClick={this.onTopicClick}/>
       </div>
     </div>      
   </div>;
  }

}

export default RootPanel;