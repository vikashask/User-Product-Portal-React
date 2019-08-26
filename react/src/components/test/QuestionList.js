import React from 'react';
// import * as Constants from '../../utils/Constants';

class EachQuestion extends React.Component { 
      handleChange(e, data){
        const questionId = data._id;
        console.log('dafa', e.target.value)

        this.props.handleChange({ [questionId]: e.target.value});
      }

      render() {
          const { data } = this.props;
          return(
            <div className="jumbotron">
            <p>{data.question}</p>
            <p>
              <label>
                <input type="radio" name={data._id} value={data.a} onChange={(e) => this.handleChange(e, data)}></input>{data.a}
              </label>
              <label>
              <input type="radio" name={data._id} value={data.b} onChange={(e) => this.handleChange(e, data)}></input>{data.b}
              </label>
              <label>
                <input type="radio" name={data._id} value={data.c} onChange={(e) => this.handleChange(e, data)}></input>{data.c}
              </label>
              <label>
                <input type="radio" name={data._id} value={data.d} onChange={(e) => this.handleChange(e,data)}></input>{data.d}
              </label>
            </p>
          </div>
          )
      }

}

export default EachQuestion;
