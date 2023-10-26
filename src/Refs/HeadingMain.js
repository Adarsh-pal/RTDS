import React , {Component} from "react";
import NavItem from "./NavItem";

class HeadingMain extends Component{

    constructor(props) {
      super(props)

      this.headingRef = React.createRef();

    }

    updateHeading(value){
        
        this.headingRef.current.innerText = "Welcome to " + value + " page!"; 
    }

    render(){

        return (
            <>
                <h1 ref={this.headingRef} className="heading">Welcome Stranger!</h1>
            </>
        )

    }


}

export default HeadingMain;