import React from 'react';
import * as Constants from '../../utils/Constants';

class StartTest extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          question: []
        };
      }
    componentDidMount = () =>{

      console.log("this.props.location",this.props.location.state.selectedTest);
      fetch(Constants.baseURL + 'question',
      {
          method: `GET`,
          credentials: `include`,
              headers: {
                  'Content-Type': 'application/json',
              }
      }).then((res) => {
          if(res.status === 200) {
              res.json().then((response) => {
                  console.log('response',response);
                  this.setState({question: response});
              })
          }
      })
      .catch((error) => {
          console.log("error----", error);
      });
      
    }
    
      handleSelect(eventKey, event) {
          // console.log("---",options[eventKey]);
        // this.setState({ selectedOption: options[eventKey] });
      }

      onSubmitTest = (event) =>{
        event.preventDefault();
        console.log("event",event.target.value);
        console.log("selected",this.state.selectedOption);
                
      }
    
      render() {
          return(
              <div className="container">
                <h2>Start Test</h2>
                <hr></hr>
                <div className="jumbotron">
                  <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                </div>
            </div>
          )
      }

}

export default StartTest;
