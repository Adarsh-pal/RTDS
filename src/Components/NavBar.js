import React, {Component} from "react";
import NavItem from "./NavItem";


class NavBar extends Component{

    render(){
        return (
            <div className="navBar">
                <ul className="list">
                    <NavItem updateHeading={this.props.update} name="Home" />
                    <NavItem updateHeading={this.props.update} name="About Us" />
                    <NavItem updateHeading={this.props.update} name="Contact" />
                </ul>
            </div>
        );
    }


}

export default NavBar;