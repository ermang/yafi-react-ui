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
    <div className="container-fluid">
      <p>
        {this.props.item.content}
      </p>
      <div className="row justify-content-end"> 
      <label className="col-auto pr-0">{this.props.item.username}</label> 
      <label className="col-auto ">{this.props.item.likeCount}</label>
      <p style={{'fontSize':'1em'}}>
      &#128077;
      </p>
      <label className="col-auto ">{this.props.item.createdOn}</label>
      </div>
    </div>
    );

  }

}

export default Thread;