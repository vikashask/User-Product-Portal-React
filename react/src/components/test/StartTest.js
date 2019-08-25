import React from 'react';
import * as Constants from '../../utils/Constants';

class StartTest extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          question: [],
          answer:[],
          selectedOption:''
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

      handleChange(event) {
        console.log("----",event.target.value);
        console.log("event",event.target.name,event.target.value);
        
        // let name = event.target.name;
        // let value = event.target.value;
        // let data = {name : value};

        this.setState({selectedOption:event.target.value})
        // this.setState(state => {
        //   const selectedOption = state.selectedOption.push(data);
        //   return {
        //     selectedOption,
        //     value: '',
        //   };
        // });

        // this.setState({answer:event.target.value})
        // let selectedOption = this.state.selectedOption;
        // let name = event.target.name;
        // let value = event.target.value;
        // let data = {name : value};
        // selectedOption.push(data)
        // this.setState({selectedOption: [event.target.name : event.target.value]});
      }

      onSubmitTest = (event) =>{
        event.preventDefault();
        console.log("event",event.target.name,event.target.value);
        console.log("selected",this.state.answer);
                
      }
    
      render() {
        const questionList = this.state.question.map(data=>{
          return(
            <div className="jumbotron" key={data._id}>
              <p>{data.question}</p>
              <p>
                <label>
                  <input type="radio" name={data._id} value={data.a} onChange={this.handleChange}></input>{data.a}
                </label>
                <label>
                <input type="radio" name={data._id} value={data.b} onChange={this.handleChange}></input>{data.b}
                </label>
                <label>
                  <input type="radio" name={data._id} value={data.c} onChange={this.handleChange}></input>{data.c}
                </label>
                <label>
                  <input type="radio" name={data._id} value={data.d} onChange={this.handleChange}></input>{data.d}
                </label>
              </p>
            </div>
          )
          
        })
          return(
              <div className="container">
                <h2>Start Test</h2>
                <hr></hr>
                <form onSubmit={this.onSubmitTest}>
                {questionList}
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
