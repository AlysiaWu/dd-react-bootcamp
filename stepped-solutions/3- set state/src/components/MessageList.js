import React from 'react'

class MessageList extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputText: ''
    };
  }

  handleChange(event) {
  this.setState({inputText: event.target.value});
}
  render() {
    return (
      <div className="App-header">
        {this.props.messages.map(message => (<p> {message.message} </p>))}
        <div> You typed {this.state.inputText} </div>
        <input onChange={this.handleChange} type="text" value={this.state.inputText} />
        <button > Submit </button>
      </div>
    )
  }
}

export default MessageList;
