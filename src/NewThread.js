import React, {useState, useEffect} from 'react';
import Constant from './Constant';
import SWButton from './SWButton'

function NewThread(props) { 

  const [text, setText] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    if (text.trim().length > 1 )
    setSubmitEnabled(true);
    else
    setSubmitEnabled(false);
  }, [text]);
  
  function onTextChange(event) {
    setText(event.target.value);
  }

  function onSubmit() {
    console.log('login clicked');
    fetch( Constant.CREATE_THREAD_URL,  {
      method: "POST",
      body: JSON.stringify({"content": text, "topicId": props.topicId}),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'        
        // "Authorization": "Basic "  + btoa(this.props.username + ":" + this.props.password)      
     },
     credentials: 'include',}, null)
   // .then(response => response.json())
    .then(data => { console.log(data); setText(''); props.onNewThreadSubmitted(); })
    //.then(data => this.onSignInSuccess());
    //this.setState({global: {signedIn: true}}); 
  }

  return (    
    <div className="container-fluid">
      <input type="text" value={text} onChange={onTextChange}></input>
      {/* <button onClick={onSubmit} className="btn btn-primary">submit</button> */}
      <SWButton enabled={submitEnabled} onClick={onSubmit}></SWButton>
    </div>
  );

}

export default NewThread;