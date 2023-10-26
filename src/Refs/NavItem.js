import React, { Component } from 'react'
import HeadingMain from "./HeadingMain";

class NavItem extends Component {
  
    clickHandler = () =>{
        
        this.props.updateHeading(this.props.name);
    }
  
  render() {
    return (
        <li onClick={this.clickHandler} >{this.props.name}</li>
    )
  }
}

export default NavItem