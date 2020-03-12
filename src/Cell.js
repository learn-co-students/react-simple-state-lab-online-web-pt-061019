import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = {
      color: value
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }

  clickListener = (event) => {
    this.state.color = '#333'
  }


  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick='clickListener'>
        {this.genMatrix()}
      </div>
    )
  }

}
