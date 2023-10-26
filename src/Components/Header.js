import React , {Component} from "react";
import NavBar from "./NavBar";
import HeadingMain from "./HeadingMain";

console.log(NavBar)

class Header extends Component{

    constructor(){
        super();

        this.updateHeading = this.updateHeading.bind(this);

        this.state = {
            content : 'Welcome Stranger!'
        }
    }

    updateHeading(value){

        this.setState({
            content : "Welcome to " + value + " page!"
        })


    }


    render(){
        return (

            <div className="header">
                <HeadingMain content={this.state} />
                <NavBar update={this.updateHeading} />
            </div>
    
        );
    }
    


}

export default Header;