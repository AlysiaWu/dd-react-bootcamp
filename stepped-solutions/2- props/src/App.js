import React, { Component } from 'react';
import './App.css';
import RoomHeader from './components/RoomHeader'
import MessageList from './components/MessageList'

const messages = [
  {
    message: 'hi',
    author: 'Arthur'
  },
  {
    message: 'hii',
    author: 'Buster'
  },
  {
    message: 'heyy',
    author: 'Muffy'
  },
]

class App extends Component {
  render() {
    return (
      <div className="app">
        <RoomHeader names={messages.map(message => message.author)}/>
        <div className="message-list"> <MessageList messages={messages} /> </div>
      </div>
    );
  }
}

export default App;
