import React from 'react';
import Constant from './Constant'

class LeftPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: []};
    this.onTopicClick = this.onTopicClick.bind(this);
  }

  componentDidMount() {
    this.setState({"lala": "lala"})
    var vm = this;
    fetch( Constant.BASE_URL.concat('/topic/popular'))
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => vm.setState({"content": data.readTopics}));
  }

  onTopicClick(topicId) {
    console.log('topic clicked', topicId);
  }

  render() {
    const listItems = this.state.content.map((item) =>
      <li key={item.id.toString()} onClick={() => this.onTopicClick(item.id)} className="list-group-item">
        {item.name}
      </li>);

     return <div><h2 className="h2">Popular Topics</h2><ul className="list-group"> {listItems} </ul></div>;
 

    //return '';
  }


}

export default LeftPanel;