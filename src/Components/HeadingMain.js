import React , {Component} from "react";
import NavItem from "./NavItem";

class HeadingMain extends Component{

    render(){

        return (
            <>
                <h1 className="heading">{this.props.content.content}</h1>
            </>
        )

    }


}

export default HeadingMain;