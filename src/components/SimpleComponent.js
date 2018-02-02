// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
  state ={
    mood: 'happy'
  }

  toggleState = () => {
    if (this.state.mood === 'happy') {
      this.setState({mood: 'sad'})
    } else {
      this.setState({mood: 'happy'})
    }
  }

  render() {
    return(
      <div onClick={this.toggleState}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
