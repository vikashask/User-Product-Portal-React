import React from 'react';
// import Sidebar from '../layout/Sidebar';
import Header from "../layout/Header";
import {DropdownButton,MenuItem} from "react-bootstrap";

const options = ["Javascript", "Node", "React js", "Angular"];

class Test extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          selectedTest: options[0] // default selected value
        };
      }
    
      handleSelect(eventKey, event) {
          console.log("---",options[eventKey]);
        this.setState({ selectedTest: options[eventKey] });
      }

      startTest = (event) =>{
        event.preventDefault();
        console.log("event",event.target.value);
        console.log("selected",this.state.selectedTest);
       this.props.history.push('/start-test',{
        selectedTest:this.state.selectedTest,
        testLevel:event.target.value
       }); 
        
      }
    
      render() {
          return(
              <div className="container">
                <h1 class='sub-header'>Please select your test.</h1>
              {/* <Sidebar/> */}
              <Header/>
                <div className="jumbotron select_option col-md-10">
                <DropdownButton
                    title={this.state.selectedTest}
                    id="document-type"
                    onSelect={this.handleSelect.bind(this)}
                >
                    {options.map((opt, i) => (
                    <MenuItem key={i} eventKey={i}>
                        {opt}
                    </MenuItem>
                    ))}
                </DropdownButton>
                <hr></hr>
                  <div className="row">
                      <div className="col-lg-4">
                      <p><input className="btn btn-default" onClick={this.startTest.bind(this)} type="button" value="Beginner"></input></p>
                      </div>
                      <div className="col-lg-4">
                      <p><input className="btn btn-default" onClick={this.startTest.bind(this)} type="button" value="Intermediate"></input></p>
                      </div>
                      <div className="col-lg-4">
                      <p><input className="btn btn-default" onClick={this.startTest.bind(this)} type="button" value="Experienced"></input></p>
                  </div>
                  </div>

                </div>
            </div>

          )
      }

}

export default Test;
