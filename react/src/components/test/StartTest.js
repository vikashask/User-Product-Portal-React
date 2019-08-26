import React from 'react';
import * as Constants from '../../utils/Constants';
import EachQuestion from './QuestionList';
class StartTest extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          question: [],
          answer:[],
          selectedOption:[]
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
                  response.forEach(element => {
                    this.setState({[element._id]: ''});                    
                  });
                  this.setState({question: response});
              })
          }
      })
      .catch((error) => {
          console.log("error----", error);
      });
      
    }
    
      handleChange = (data) => {
        //console.log('in parent', this.state);
        this.setState({...this.state, ...data}, ()=>{
          console.log('new state', this.state);
        });
      }

      onSubmitTest = (event) =>{
        event.preventDefault();
        console.log("event",event.target.name,event.target.value);
        console.log("selected",this.state.answer);
                
      }
    
      render() {
          return(
              <div className="container">
                <h2>Start Test</h2>
                <hr></hr>
                <form onSubmit={this.onSubmitTest}>
                {this.state.question.map(data=>{
                    return(
                      <EachQuestion data={data} handleChange={this.handleChange} key={data._id}/>
                    )
                })}
                {/* <label>
                  <input type="radio" name="op5" onChange={this.handleChange} value="test"></input>test
                </label> */}
                <input type="submit" value="Submit" />
                </form>
            </div>
          )
      }

}

export default StartTest;
