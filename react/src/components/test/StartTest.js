import React from 'react';
import * as Constants from '../../utils/Constants';
import EachQuestion from './QuestionList';
import QuesWithAnsList from './QuesWithAnsList';
import Header from "../layout/Header";
class StartTest extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          question: [],
          finalAnswer:[],
          isTestCompleted:false
          // selectedOption:[]
        };
      }
    componentDidMount = () =>{
      // console.log("this.props.location",this.props.location.state.selectedTest);
      var url = new URL(Constants.baseURL + 'question'),
      params = {selectedTest:this.props.location.state.selectedTest, testLevel:this.props.location.state.testLevel}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      fetch(url,
      {
          method: `GET`,
          credentials: `include`,
            headers: {
                'Content-Type': 'application/json',
            }
      }).then((res) => {
          if(res.status === 200) {
              res.json().then((response) => {
                  // console.log('response',response);
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
        let finalAnswerArr = [];
        this.state.question.map( q=> {
          let question_id = q._id;
          let answer = q.answer;
          // if(this.state[question_id] === q.answer){
            finalAnswerArr.push({question_id:question_id,question:q.question,correctAnswer:answer,testAnswer:this.state[question_id]});
            // console.log("final answer",this.state[question_id] , q.answer);
          // }
        });
        // console.log("final answer",finalAnswerArr);
        this.setState({finalAnswer:finalAnswerArr,isTestCompleted:true})
      }
    
      render() {
        // console.log("final answer sta",this.state.finalAnswer);
          return(
              <div className="container">
                <Header/>
               
                <h1 class='sub-header'>Start Test</h1>
              
                {!this.state.isTestCompleted && 
                  <form onSubmit={this.onSubmitTest}>
                    {this.state.question.map((data, index)=>{
                      data.index = index+1;
                        return(
                          <EachQuestion data={data} handleChange={this.handleChange} key={data._id}/>
                        )
                    })}
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                  </form>
                }
                
                {
                  this.state.isTestCompleted && this.state.finalAnswer.map((ans, index) => {
                    ans.index = index+1;
                    return(
                      <QuesWithAnsList finalAnswer={ans} key={ans.index}/>
                    )
                  }) 
                }
            </div>
          )
      }

}

export default StartTest;
