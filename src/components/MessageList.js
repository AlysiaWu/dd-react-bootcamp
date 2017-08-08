import React from 'react'

class MessageList extends React.Component {
  render() {
    return (
      <div className="App-header">
      	{this.props.messages.map(message => (<p> {message.message} </p>))}
      </div>
    )
  }
}

export default MessageList;
