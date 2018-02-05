// Code SimpleComponentHere Here
import React from 'react'
class SimpleComponent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      mood: 'happy'
    }
  }

  handleClickMood = (e) => {
    this.setState(prevState => ({
      mood: prevState.mood ==='happy' ? 'sad' : 'happy'
    }))
  }


  render(){
    return(
      <div onClick={this.handleClickMood}>{this.state.mood}</div>
    )
  }
}
export default SimpleComponent
