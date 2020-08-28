import React, {useState, useEffect} from 'react';
import Constant from './Constant'

function LeftPanel(props) {

  const [content, setContent] = useState([]);

  useEffect(() => {
   
    fetch( Constant.TOPIC_POPULAR)
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => setContent(data.readTopics));
  }, []);

  function onTopicClick(topicId) {
    console.log('topic clicked', topicId);
    props.topicClicked(topicId);
  }

  const listItems = content.map((item) =>
    <li key={item.id.toString()} onClick={() => onTopicClick(item.id)} className="list-group-item">
      {item.name}
    </li>);

  return (
    <div>
      <h2 className="h2">Popular Topics</h2>
      <ul className="list-group"> {listItems} </ul>
    </div>
  );    
  

}

export default LeftPanel;