import React from 'react';
import MainPanel from './MainPanel'
import LeftPanel from './LeftPanel'
import TopPanel from './TopPanel'

class RootPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {signedIn: false};
    this.onSignInSuccess = this.onSignInSuccess.bind(this);
  }

  componentDidMount() {
  } 

  onSignInSuccess() {
    this.setState({signedIn: true});
  }

  render() {     
     return <div className="container-fluid">      
     <div className="row">
       <TopPanel signedIn={this.state.signedIn} onSignInSuccess={this.onSignInSuccess}/>
     </div>
     <div className="row">  
       <div className="col-2">    
         <LeftPanel/>
       </div>
       <div className="col">
         <MainPanel signedIn={this.state.signedIn}/>
       </div>
     </div>      
   </div>;
  }

}

export default RootPanel;