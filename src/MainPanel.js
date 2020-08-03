import React from 'react';
import Constant from './Constant'
import Thread from './Thread'
import NewThread from './NewThread'

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {render: 'RECENT', content: [], topicId: null};
    this.onTopicClick = this.onTopicClick.bind(this);
    this.onNewThreadSubmitted = this.onNewThreadSubmitted.bind(this);
  }

  componentDidMount() {    
    var vm = this;
    fetch( Constant.THREAD_RECENT_URL)
    .then(response => response.json())    
    .then(data => vm.setState({"content": data.content}));
  }

  onTopicClick(topicId) {
    console.log('topic clicked', topicId);
    fetch( Constant.READ_THREADS_BY_TOPIC_ID_URL.concat(topicId + '?page=0'))
    .then(response => response.json())    
    .then(data => {this.setState({render: 'TOPIC', "content": data.content}); this.setState({"topicId": topicId})});
  }

  onNewThreadSubmitted() {   
    console.log('onNewThreadSubmitted');
    fetch(Constant.READ_THREADS_BY_TOPIC_ID_URL.concat(this.state.topicId + '?page=0'))
    .then(response => response.json())    
    .then(data => {this.setState({"content": data.content}); });
  }

  render() {
    if (this.state.render === 'RECENT')
      return this.renderRecentThreads();
    else if (this.props.signedIn === false && this.state.render === 'TOPIC')
      return this.renderThreadsByTopic();
    else if (this.props.signedIn === true && this.state.render === 'TOPIC')
      return this.renderThreadsByTopicWithNewThread();
  
  }

  renderRecentThreads() {
    const listItems = this.state.content.map((item) =>
    <li  key={item.id.toString()}  className="list-group-item">
      <h2 className="h2" onClick={() => this.onTopicClick(item.topicId)}>{item.topicName} </h2>
      <Thread item={item}></Thread>
    </li>);

   return <ul className="list-group"> {listItems} </ul>;
  }

  renderThreadsByTopic() {   
    const listItems = this.state.content.map((item) =>
    <li  key={item.id.toString()}  className="list-group-item">      
      <Thread item={item}></Thread>
    </li>);
    
    const topicName = this.state.content[0].topicName;

    return <><h2>{topicName}</h2><ul className="list-group"> {listItems} </ul></>;
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