import React, { Component } from 'react';

import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import './App.css';
import avatar from './user.svg';

import socket from './socket'

class App extends Component {
  constructor(props){
    super(props);
    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
    this.handleNewResponse = this.handleNewResponse.bind(this);
    this.state={
      mensagem: null,
      docId:'doc1'
    }

    socket.emit('enter room', this.state.docId);
    socket.on('user Message', this.handleNewResponse);
  }

  componentDidMount(){

  }

  handleNewUserMessage = (newMessage) =>{
    socket.emit('msg', newMessage, this.state.docId);
  }

  handleNewResponse = (message) =>{
    addResponseMessage(message);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <Widget 
            title="Bem vindo"
            subtitle=""
            handleNewUserMessage={ this.handleNewUserMessage}
            profileAvatar= {avatar}
          />
      </div>
    );
  }
}

export default App;
