import React from 'react';
import Sidebar from '../layout/Sidebar';
import {ButtonToolbar,Dropdown,ButtonGroup,Button,DropdownButton,MenuItem} from "react-bootstrap";

const options = ["Javascript", "Node", "React js", "Angular"];

class Test extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: options[0] // default selected value
        };
      }
    
      handleSelect(eventKey, event) {
          console.log("---",options[eventKey]);
        this.setState({ selectedOption: options[eventKey] });
      }
    
      render() {
          return(
              <div>
              <Sidebar/>
                <div className="select_option">
                {/* <label htmlFor="type">Document Desc</label> */}
                <DropdownButton
                    title={this.state.selectedOption}
                    id="document-type"
                    onSelect={this.handleSelect.bind(this)}
                >
                    {options.map((opt, i) => (
                    <MenuItem key={i} eventKey={i}>
                        {opt}
                    </MenuItem>
                    ))}
                </DropdownButton>
                </div>
            </div>

          )
      }

}

export default Test;
