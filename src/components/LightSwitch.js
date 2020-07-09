import React, {Component} from 'react';

class LightSwitch extends Component {
  constructor(){
    super();

    //Initial state
    this.state = {
      toggled: false
    }
  }

  //when handleClick is called, setState will update the state so that the toggle is reversed
  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }

  render(){
    return(
      <div>
      <p> Click LightSwitch below </p>
      <button onClick={this.handleClick}><h1>{this.state.toggled ? "ON" : "OFF"}</h1></button>
      </div>
    )
  }
}

export default LightSwitch
