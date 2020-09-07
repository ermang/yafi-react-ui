import React from 'react';
import Constant from './Constant'
import Thread from './Thread'
import NewThread from './NewThread'
import RecentThreads from './RecentThreads';
import ThreadsByTopic from './ThreadsByTopic';

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: []};
    this.onTopicClick = this.onTopicClick.bind(this);
    this.onNewThreadSubmitted = this.onNewThreadSubmitted.bind(this);
  }

  onTopicClick(topicId) {
    console.log('MainPanel topic clicked', topicId);
    fetch( Constant.READ_THREADS_BY_TOPIC_ID_URL.concat(topicId + '?page=0'))
    .then(response => response.json())    
    .then(data => {this.setState({"content": data.content}); this.props.onTopicClick(topicId); });
  }

  onNewThreadSubmitted() {   
    console.log('onNewThreadSubmitted');
    fetch(Constant.READ_THREADS_BY_TOPIC_ID_URL.concat(this.state.topicId + '?page=0'))
    .then(response => response.json())    
    .then(data => {this.setState({"content": data.content}); });
  }

  render() {
    if (this.props.topicId === 0)
      return <RecentThreads onTopicClick={this.onTopicClick} signedIn={this.props.signedIn}></RecentThreads>;
    else
      return <ThreadsByTopic topicId={this.props.topicId} signedIn={this.props.signedIn}></ThreadsByTopic>;
    // else if (this.props.signedIn === false && this.state.render === 'TOPIC')
    //   return this.renderThreadsByTopic();
    // else if (this.props.signedIn === true && this.state.render === 'TOPIC')
    //   return this.renderThreadsByTopicWithNewThread();
  
  } 

  renderThreadsByTopicWithNewThread() {
    const listItems = this.state.content.map((item) =>
    <li  key={item.id.toString()}  className="list-group-item">      
      <Thread item={item}></Thread>
    </li>);
    
    const topicName = this.state.content[0].topicName;

    return <><h2>{topicName}</h2>
             <ul className="list-group"> {listItems} </ul>
             <NewThread topicId={this.state.topicId}
                        username={this.props.username}
                        password={this.props.password}
                        onNewThreadSubmitted={this.onNewThreadSubmitted}>
             </NewThread>
           </>;   
  }

}

export default MainPanel;