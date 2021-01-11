import React, { Component, createRef } from 'react'
import './App.css'
import './Animation.css'

import Formulaire from './components/Formulaire.js'
import Message from './components/Message.js'

//FireBase
import base from './base'

// Animation
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/',{
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages}
    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(
        key => {
          messages[key] = null
        }
      )


    this.setState({messages})
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render () {

    const messages = Object
      .keys(this.state.messages)
      .map(key =>
        <CSSTransition
          key={key}
          timeout={200}
          classNames='fade'>
          <Message
          isUser={this.isUser}
          message ={this.state.messages[key].message}
          pseudo ={this.state.messages[key].pseudo}
        />
        </CSSTransition>
      )


    return (
      <div className='box' >
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className='message'>
              { messages }
            </TransitionGroup>
          </div>
        </div>
        <Formulaire 
          length={140}
          pseudo={this.state.pseudo} 
          addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
