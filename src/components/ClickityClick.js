import React, {Component} from 'react';

export default class ClickityClick extends Component {
  constructor(){
    super();

    //Define the initial state
    this.state = {
      hasBeenClicked : false
    };
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked : true
    },
    () => console.log(this.state.hasBeenClicked))
  };

  render(){
    return(
      <div>
      <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked! {this.state.hasBeenClicked ? null : '(but can only be changed once)'}</p>
      <button onClick={this.handleClick}>Click me to change statement above!</button>
      </div>
    )
  }
}
