import React from 'react';
import { connect } from 'react-redux';
import Header from "../layout/Header";
import TextFieldGroup from '../../utils/TextFieldGroup';

class EditQuestion extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
            errors: {},

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
            })
        }else{
            this.props.history.push('/home');
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = () =>{
        this.props.history.push('/manage-question');
    }
    render = () => {
        return(
            <div className="container">
              <Header/>
                <form className="form-signin">
                    <h2 className="sub-header">Edit Question : {this.state._id}</h2>
                    {/* <input type="text" value={this.state.q_type} className="form-control"/> */}
                    <TextFieldGroup
                        // error={errors.username}
                        label="Username"
                        onChange={this.onChange}
                        checkUserExists={this.checkUserExists}
                        value={this.state.q_type}
                        field="username"
                    />
                    <br></br>
                    <input type="text" value={this.state.q_level} className="form-control"/>
                    <br></br>
                    <input type="text" value={this.state.question} className="form-control"/>
                    <br></br>

                    <input type="text" value={this.state.a} className="form-control"/>
                    <br></br>
                    <input type="text" value={this.state.b} className="form-control"/>
                    <br></br>
                    <input type="text" value={this.state.c} className="form-control"/>
                    <br></br>

                    <input type="text" value={this.state.d} className="form-control"/>
                    <br></br>
                    <input type="text" value={this.state.e} className="form-control"/>
                    <br></br>
                    <input type="text" value={this.state.answer} className="form-control"/>
                    <br></br>
                    <button onClick={this.onGetProduct} className="btn btn-primary" type="submit">See Question List</button>
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