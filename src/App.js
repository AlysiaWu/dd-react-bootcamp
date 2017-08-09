import React, { Component } from 'react';
import './App.css';
import RoomHeader from './components/RoomHeader'
import MessageList from './components/MessageList'
import RoomList from './components/RoomList'

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

const roomList = [
  {
    id: 1,
    name: 'Cake Room',
  },
  {
    id: 2,
    name: 'Candy Room',
  }
]

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="room-list"> <RoomList rooms={roomList} /> </div>
        <div className="room">
          <RoomHeader names={messages.map(message => message.author)}/>
          <div className="message-list"> <MessageList messages={messages} /> </div>
        </div>
      </div>
    );
  }
}

export default App;
