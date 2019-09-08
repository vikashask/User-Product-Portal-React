import React from 'react';
import { connect } from 'react-redux';
import Header from "../layout/Header";
import TextFieldGroup from '../../utils/TextFieldGroup';
import * as Constants from '../../utils/Constants';

class AddQuestion extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
          q_type: '',
          q_level: '',
          question: '',
          a: '',
          b: '',
          c: '',
          d: '',
          e: '',
          isLoading: false,
          invalid: false,
          errors: {},
          subject:'',
          answer:''
        }
        this.onChange = this.onChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount = () =>{
        
    }
    onChange(e) {
        console.log("[e.target.name]: e.target.value ",[e.target.name], e.target.value );
        this.setState({ [e.target.name]: e.target.value });
    }
    onUpdate = (event) =>{
        event.preventDefault();
        console.log("state value",this.state);
        fetch(Constants.baseURL + 'question',
            {
                method: `POST`,
                credentials: `include`,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'question': this.state.question,
                    'answer':this.state.answer, 
                    'q_type': this.state.q_type,
                    '_id':this.state._id ,
                    'q_level': this.state.q_level,
                    'subject': this.state.subject,
                    'a': this.state.a,
                    'b': this.state.b,
                    'c': this.state.c,
                    'd': this.state.d,
                    'e': this.state.e,
                })
            }).then((res) => {
                if(res.status === 200) {
                    res.json().then((response) => {
                        if(response){
                            this.props.history.push('/manage-question');
                        }else{
                            this.setState({class:'error',errorMsg: 'Unable to update'});
                        }
                    })
                }
            })
            .catch((error) => {
                console.log("error----", error);
            });
        // this.props.history.push('/manage-question');
    }
    render = () => {
        return(
            <div className="container">
              <Header/>
                <form className="form-signin">
                    <h2 className="sub-header">Edit Question : {this.state._id}</h2>
                    {/* <input type="text" value={this.state.q_type} className="form-control"/> */}
                    <TextFieldGroup
                        field="q_type"
                        value={this.state.q_type}
                        label="Question Type"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="q_level"
                        value={this.state.q_level}
                        label="Question Level"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="subject"
                        value={this.state.subject}
                        label="Subject"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="question"
                        value={this.state.question}
                        label="Question"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="a"
                        value={this.state.a}
                        label="Option A"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="b"
                        value={this.state.b}
                        label="Option B"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="c"
                        value={this.state.c}
                        label="Option C"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="d"
                        value={this.state.d}
                        label="Option D"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="e"
                        value={this.state.e}
                        label="Option E"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="answer"
                        value={this.state.answer}
                        label="Answer"
                        onChange={this.onChange}
                    />
                    <button onClick={this.onUpdate} className="btn btn-primary" type="submit">Update</button>
                    <br></br>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        allData:state.allData
    }
};

export default connect(mapStateToProps)(AddQuestion);