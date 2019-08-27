import React from 'react';
// import * as Constants from '../../utils/Constants';

class QuesWithAnsList extends React.Component { 
      onSelectQuestion(e, data){
        const questionId = data._id;
        console.log('dafa', e.target.value)
        this.props.handleChange({ [questionId]: e.target.value});
      }

      render() {
          const { finalAnswer } = this.props;
          return(
            <div className="jumbotron">
            <div className="alert alert-info">
               {finalAnswer.index}. Question:{finalAnswer.question}
            </div>
            <div className={finalAnswer.testAnswer===finalAnswer.correctAnswer?'alert alert-success':'alert alert-danger'}>
               You Answered:{finalAnswer.testAnswer}
            </div>
            <div className="alert alert-danger">
               <h5>Correct answer:{finalAnswer.correctAnswer} <span className="badge badge-secondary">Answer</span></h5>
               
            </div>
          </div>
          )
      }

}

export default QuesWithAnsList;
