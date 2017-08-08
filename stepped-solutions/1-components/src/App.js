import React, { Component } from 'react';
import './App.css';
import RoomHeader from './components/RoomHeader'
import MessageList from './components/MessageList'

class App extends Component {
  render() {
    return (
      <div className="app">
        <RoomHeader />
        <div className="message-list"> <MessageList /> </div>
      </div>
    );
  }
}

export default App;
