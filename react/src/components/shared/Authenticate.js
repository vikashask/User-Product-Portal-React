import React, { Component } from 'react';
import Header from "./../../components/layout/Header";

class Authenticate extends Component {

    componentDidMount = () =>{
        console.log("Authenticate comp called automatically");
    }

    render = () => {
        return(
            <div>
              <Header subtitle="React"/>
                {/* Authenticate */}
            </div>
        )
    }
}
export default Authenticate;
