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
        const questionList = this.state.question.map(data=>{
          console.log("data",data);
          return(
            <div className="jumbotron">
              <p>{data.question}</p>
              <p>
                <label>
                  <input type="radio" name="op1" value={data.a}></input>{data.a}
                </label>
                <label>
                  <input type="radio" name="op1" value={data.b}></input>{data.b}
                </label>
                <label>
                  <input type="radio" name="op1" value={data.c}></input>{data.c}
                </label>
                <label>
                  <input type="radio" name="op1" value={data.d}></input>{data.d}
                </label>
              </p>
            </div>
          )
          
        })
          return(
              <div className="container">
                <h2>Start Test</h2>
                <hr></hr>
                {questionList}
            </div>
          )
      }

}

export default StartTest;
