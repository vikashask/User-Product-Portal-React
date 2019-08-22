import React from 'react';
import Sidebar from '../layout/Sidebar';
import {ButtonToolbar,Dropdown,ButtonGroup,Button,DropdownButton,MenuItem} from "react-bootstrap";

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
              <div>
              <Sidebar/>
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
                      <div className="col-lg-2">
                      <p><input className="btn btn-default" onClick={this.startTest.bind(this)} type="button" value="begginer"></input></p>
                      </div>
                      <div className="col-lg-2">
                      <p><input className="btn btn-default" onClick={this.startTest.bind(this)} type="button" value="Intermidiate"></input></p>
                      </div>
                      <div className="col-lg-2">
                      <p><input className="btn btn-default" onClick={this.startTest.bind(this)} type="button" value="Experienced"></input></p>
                  </div>
                  </div>

                </div>
            </div>

          )
      }

}

export default Test;
