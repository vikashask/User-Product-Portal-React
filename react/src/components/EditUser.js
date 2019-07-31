import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from '../utils/Utils';
import * as Constants from '../utils/Constants';
import MessageBar from './shared/MessageBar'

class EditUser extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            age:'',
            _id:'',
            validated:false,
            class:'error',
            errorMsg:''
 
        }
        this.firstNameChange = this.firstNameChange.bind(this);
        this.plastNameChange = this.lastNameChange.bind(this);
        this.ageChange = this.ageChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }

    // getting all data from store from home component
    componentDidMount = () =>{
        console.log("getting all data from store from home component---",this.props.allData);
        console.log("==================_id",this.props.location.state._id);
        if(this.props.location.state){
            this.setState({
                email:this.props.location.state.email,
                firstName:this.props.location.state.firstName,
                lastName:this.props.location.state.lastName,
                age:this.props.location.state.age,
                password:this.props.location.state.password,
                _id:this.props.location.state._id,

            })
        }else{
            this.props.history.push('/home');
        }
    }

    firstNameChange = (event) =>{
        this.setState({firstName: event.target.value});
    }
    lastNameChange = (event) =>{
        this.setState({lastName: event.target.value});
    }

    ageChange = (event) =>{
        this.setState({age: event.target.value});
    }
    
    passwordChange = (event) =>{
        this.setState({password: event.target.value});
    }

    emailChange = (event) => {
        this.setState({email: event.target.value});
        let inputVal = event.target.value;
        let emailRegExp = Utils.emailRegExp(inputVal); 
        if(inputVal.length>=5 && inputVal.length <= 254 && emailRegExp){
            this.setState({validated:true,class:'',errorMsg:''});
          }else if(inputVal.length === 0){
            this.setState({class:'error',errorMsg: 'Invalid Email ID'});
          }else{
            this.setState({class:'error',errorMsg: 'Invalid Email ID'});
          } 
    }

    onRegister = (event) => {
		event.preventDefault();
        fetch(Constants.baseURL + 'user',
            {
                method: `PUT`,
                credentials: `include`,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'firstName': this.state.firstName,'lastName':this.state.lastName, 'age': this.state.age,
                    '_id':this.state._id })
            }).then((res) => {
                if(res.status === 200) {
                    res.json().then((response) => {
                        if(response){
                            this.props.history.push('/home');
                        }else{
                            this.setState({class:'error',errorMsg: 'Unable to update'});
                        }
                    })
                }
            })
            .catch((error) => {
                console.log("error----", error);
            });
    }

    onCancel = () =>{
        this.props.history.push('/home');
    }

    render = () => {
        let message;
        if(this.state.errorMsg){
          message = <MessageBar errorMsg={this.state.errorMsg} className={this.state.class}/>
        }
        return(
            <div className="container">
                {message}
                <form className="form-signin">
                    <h2 className="form-signin-heading">Edit user</h2>
                    <input type="text" value={this.state.firstName} onChange={this.firstNameChange} className="form-control" placeholder="Enter first name" required autoFocus />
                    <br></br>
                    <input type="text" value={this.state.lastName} onChange={this.lastNameChange} className="form-control" placeholder="Enter last name" required />
                    <br></br>
                    <input type="text" value={this.state.age} onChange={this.ageChange} className="form-control" placeholder="Enter Age" required />
                    <br></br>
                    <input type="email" value={this.state.email} onChange={this.emailChange} className="form-control" placeholder="Email address" readOnly />
                    <br></br>
                    <input type="password" value={this.state.password} onChange={this.passwordChange} className="form-control" placeholder="Password" readOnly />
                    <br></br>
                    <button onClick={this.onRegister} className="btn btn-primary" type="submit">Update user</button>
                    <button onClick={this.onCancel} className="btn btn-default" type="submit">Cancel</button>
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

export default connect(mapStateToProps)(EditUser);