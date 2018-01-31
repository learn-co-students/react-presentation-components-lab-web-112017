// Code SimpleComponentHere Here
import React from 'react'

const moods = {"sad": "happy", "happy": "sad"}

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: "happy"
    }
  }

  switchMood = () => {
    this.setState({
      mood: moods[this.state.mood]
    })
  }

  render() {
    return (
      <div onClick={ this.switchMood }>
        { this.state.mood }
      </div>
    )
  }
}

export default SimpleComponent
