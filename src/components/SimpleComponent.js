// Code SimpleComponentHere Here
import React from "react"

class SimpleComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mood: "happy"
    }
  }

  handleClick = (e) => {
    if (this.state.mood === "happy"){
      this.setState({mood: "sad"})
    } else {
      this.setState({mood: "happy"})
    }
  }


  render() {
    return (
      <div onClick={this.handleClick} value={this.state.mood}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent
