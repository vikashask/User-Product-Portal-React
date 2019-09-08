import React from 'react';
import { connect } from 'react-redux';
import Header from "../layout/Header";
import TextFieldGroup from '../../utils/TextFieldGroup';
import * as Constants from '../../utils/Constants';

class EditQuestion extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
            errors: {},
        }
        this.onChange = this.onChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount = () =>{
        if(this.props.location.state){
            this.setState({
                _id:this.props.location.state._id,
                question:this.props.location.state.question,
                answer:this.props.location.state.answer,
                q_type:this.props.location.state.q_type,
                q_level:this.props.location.state.q_level,
                a:this.props.location.state.a,
                b:this.props.location.state.b,
                c:this.props.location.state.c,
                d:this.props.location.state.d,
                e:this.props.location.state.e,
                subject:this.props.location.state.subject,
            })
        }else{
            this.props.history.push('/home');
        }
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
                method: `PUT`,
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
                        label="q_type"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="q_level"
                        value={this.state.q_level}
                        label="q_level"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="subject"
                        value={this.state.subject}
                        label="subject"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="question"
                        value={this.state.question}
                        label="question"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="a"
                        value={this.state.a}
                        label="a"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="b"
                        value={this.state.b}
                        label="b"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="c"
                        value={this.state.c}
                        label="c"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="d"
                        value={this.state.d}
                        label="d"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="e"
                        value={this.state.e}
                        label="e"
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="answer"
                        value={this.state.answer}
                        label="answer"
                        onChange={this.onChange}
                    />
                    {/* <br></br>
                    <input type="text" value={this.state.q_level} className="form-control"/>
                    <br></br> */}
                    {/* <input type="text" value={this.state.question} className="form-control"/>
                    <br></br>

                    <input type="text" value={this.state.a} className="form-control"/>
                    <br></br> */}
                    {/* <input type="text" value={this.state.b} className="form-control"/>
                    <br></br>
                    <input type="text" value={this.state.c} className="form-control"/>
                    <br></br>

                    <input type="text" value={this.state.d} className="form-control"/>
                    <br></br>
                    <input type="text" value={this.state.e} className="form-control"/>
                    <br></br> */}
                    {/* <input type="text" value={this.state.answer} className="form-control"/>
                    <br></br> */}
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

export default connect(mapStateToProps)(EditQuestion);