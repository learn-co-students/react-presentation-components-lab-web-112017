import React from 'react';
import SimplerComponent from './SimplerComponent'

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: "happy"
    }

  }

  handleClick = () => {
    const moodChange = this.state.mood === "happy" ? "sad" : "happy"

    this.setState({
      mood: moodChange
    })

  }

  render() {
    return (
        <div onClick={this.handleClick}>
          {this.state.mood}
        </div>
    )
  }


}

export default SimpleComponent
