import React from 'react';
import Constant from './Constant';

class SWButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {enabled: false};
    this.onClick = this.onClick.bind(this);  
  }

  componentDidMount() {
  } 

  onClick() {
    console.log('Button clicked');
    this.props.onLogin();
  }

  render() {
    if (this.props.enabled === true)     
     return <div>             
              <button onClick={this.onClick} className="btn btn-primary">submit</button>
            </div>;
    else
    return <div>
            <button onClick={this.onClick} className="btn btn-primary" disabled>submit</button>
           </div>;
  }


}

export default SWButton;