import React, {useState, useEffect} from 'react';
import Constant from './Constant';
import Thread from './Thread'

function RecentThreads(props) { 

  const [content, setContent] = useState([]);

  useEffect(() => {   
    fetch( Constant.THREAD_RECENT_URL)
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => setContent(data.content));
  }, []);

  function onTopicClick(topicId) {
    console.log('topic clicked with id=', topicId)
    props.onTopicClick(topicId)
  }
 
    
    
  const listItems = content.map((item) =>
  <li  key={item.id.toString()}  className="list-group-item">
    <h2 className="h2" onClick={() => onTopicClick(item.topicId)}>{item.topicName} </h2>
    <Thread item={item} signedIn={props.signedIn}></Thread>
  </li>);
  
  return (
  <ul className="list-group"> {listItems} </ul>
    );

  // return (<div></div>);

}

export default RecentThreads;