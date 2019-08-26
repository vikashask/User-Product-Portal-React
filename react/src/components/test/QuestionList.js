import React from 'react';
// import * as Constants from '../../utils/Constants';

class EachQuestion extends React.Component { 
      onSelectQuestion(e, data){
        const questionId = data._id;
        console.log('dafa', e.target.value)
        this.props.handleChange({ [questionId]: e.target.value});
      }

      render() {
          const { data } = this.props;
          return(
            <div className="jumbotron">
            <p>{data.question}</p>
            <div className="form-check">
              <input type="radio" className="form-check-input" name={data._id} value={data.a} onChange={(e) => this.onSelectQuestion(e, data)}></input>
              <label className="form-check-label">
                {data.a}
              </label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name={data._id} value={data.b} onChange={(e) => this.onSelectQuestion(e, data)}></input>
              <label className="form-check-label">
                {data.b}
              </label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name={data._id} value={data.c} onChange={(e) => this.onSelectQuestion(e, data)}></input>
              <label className="form-check-label">
                {data.c}
              </label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name={data._id} value={data.d} onChange={(e) => this.onSelectQuestion(e, data)}></input>
              <label className="form-check-label">
                {data.d}
              </label>
            </div>
          </div>
          )
      }

}

export default EachQuestion;
