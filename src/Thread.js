import React from 'react';

class Thread extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {content: []};
    this.onTopicClick = this.onTopicClick.bind(this);
  }

  componentDidMount() {
  }

  onTopicClick(topicId) {
    console.log('topic clicked', topicId);
  }

  render() {
    return (
    <div>
      <p>
        {this.props.item.content}
      </p>
      <div className="row justify-content-end"> 
      {this.props.item.username} 
      {this.props.item.likeCount} 
      {this.props.item.createdOn} 
      </div>
    </div>
    );

  }

}

export default Thread;