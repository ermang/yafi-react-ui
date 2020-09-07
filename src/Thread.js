import React, {useState, useEffect} from 'react';
import Constant from './Constant';

function Thread(props) {  

  function onLikeClick() {
    console.log('onLikeClick triggered');
    fetch( Constant.LIKE_THREAD_URL.concat('/').concat(props.item.id),  {
      method: "POST",
      body: null,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'            
     },
     credentials: 'include',}, null)
   // .then(response => response.json())
    .then(data => {  })
    //.then(data => this.onSignInSuccess());
    //this.setState({global: {signedIn: true}}); 

  }
  
  if (props.signedIn ===true)
    return (
    <div className="container-fluid">
      <p>
        {props.item.content}
      </p>
      <div className="row justify-content-end"> 
      <label className="col-auto pr-0">{props.item.username}</label> 
      <label className="col-auto ">{props.item.likeCount}</label>
      <p onClick={onLikeClick} style={{'fontSize':'1em'}}>&#128077;</p>      
      <label className="col-auto ">{props.item.createdOn}</label>
      </div>
    </div>
    );
  else
  return (
    <div className="container-fluid">
      <p>
        {props.item.content}
      </p>
      <div className="row justify-content-end"> 
      <label className="col-auto pr-0">{props.item.username}</label> 
      <label className="col-auto ">{props.item.likeCount}</label>
      <p style={{'fontSize':'1em'}}>        &#128077;        </p>        
      <label className="col-auto ">{props.item.createdOn}</label>
      </div>
    </div>
    );

  

}

export default Thread;