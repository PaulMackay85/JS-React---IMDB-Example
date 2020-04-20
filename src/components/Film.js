import React, {Component} from 'react';

class Film extends Component {
  render(){
    return(
      <li>{this.props.children}</li>
    )
  }
}

export default Film;
