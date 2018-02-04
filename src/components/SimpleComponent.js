// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }
  render(){
    return(
      <div onClick={this.handleClick}>
      {this.state.mood}
      </div>
    )
  }
  handleClick = () => {
    this.setState({mood: this.toggleMood()})
  }
  toggleMood = () => {
    return this.state.mood === 'happy' ? 'sad' : 'happy'
  }
}

export default SimpleComponent
