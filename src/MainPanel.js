import React from 'react';
import Constant from './Constant'
import Thread from './Thread'

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {render: 'RECENT', content: []};
    this.onTopicClick = this.onTopicClick.bind(this);
  }

  componentDidMount() {    
    var vm = this;
    fetch( Constant.BASE_URL.concat('/thread/recent'))
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => vm.setState({"content": data.content}));
  }

  onTopicClick(topicId) {
    console.log('topic clicked', topicId);
    fetch( Constant.BASE_URL.concat('/thread/topic/' + topicId + '?page=0'))
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => this.setState({render: 'TOPIC', "content": data.content}));
  }

  render() {
    if (this.state.render === 'RECENT')
      return this.renderRecentThreads();
    else if (this.state.render === 'TOPIC')
      return this.renderThreadsByTopic();
  
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

}

export default MainPanel;