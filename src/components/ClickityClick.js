// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
  constructor() {
    super();
//define the initial state
    this.state = {
hasBeedClicked: false
};
  }
handleClick = () => {
  //update your state Here
  this.setState({
    hasBeedClicked: true
  }, () =>  console.log(this.state.hasBeenClicked))//prints true

}

render() {
  return(
    <div>
    <p> I have {this.state.hasBeedClicked ? null : 'not'} been clicked! </p>
    <button onClick={this.handleClick}> Click me! </button>
    </div>
  );
}
}
export default ClickityClick;
