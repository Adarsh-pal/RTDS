import React , {Component} from "react";
import NavBar from "./NavBar";
import HeadingMain from "./HeadingMain";


class Header extends Component{

    constructor(props) {
      super(props)
    
      this.headingMainRef = React.createRef();

      this.updateHeadingMain = this.updateHeadingMain.bind(this);

    }

    updateHeadingMain(value){
        
        this.headingMainRef.current.updateHeading(value);
    }


    render(){
        return (

            <div className="header">
                <HeadingMain ref={this.headingMainRef} />
                <NavBar update={this.updateHeadingMain}  />
            </div>
    
        );
    }
    


}

export default Header;