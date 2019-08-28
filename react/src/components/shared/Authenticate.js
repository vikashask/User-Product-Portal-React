import React, { Component } from 'react';

class Authenticate extends Component {

    componentDidMount = () =>{
        console.log("Authenticate comp called automatically");
    }

    render = () => {
        return(
            <div>
                Authenticate
            </div>
        )
    }
}
export default Authenticate;
