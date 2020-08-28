import React, {useState, useEffect} from 'react';
import Constant from './Constant';
import Thread from './Thread'

function ThreadsByTopic(props) { 

  const [content, setContent] = useState([]);

  useEffect(() => {   
    console.log('topic clicked', props.topicId);
    fetch( Constant.READ_THREADS_BY_TOPIC_ID_URL.concat(props.topicId + '?page=0'))
    .then(response => response.json())    
    .then(data => { setContent(data.content); });
  }, [props.topicId]);

  function onTopicClick(topicId) {
    console.log('topic clicked with id=', topicId)
    props.onTopicClick(topicId)
  }    
    
  const listItems = content.map((item) =>
  <li  key={item.id.toString()}  className="list-group-item">      
    <Thread item={item}></Thread>
  </li>);
  
  const topicName = content.length > 0 ? content[0].topicName : 'No topicName';

  return (
  <><h2>{topicName}</h2><ul className="list-group"> {listItems} </ul></>
  );

 

}

export default ThreadsByTopic;