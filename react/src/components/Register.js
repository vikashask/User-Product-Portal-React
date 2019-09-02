import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Utils from '../utils/Utils';
import * as Constants from '../utils/Constants';
import MessageBar from '../components/shared/MessageBar'

class Register extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            age:'',
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
        fetch(Constants.baseURL + 'Register',
            {
                method: `POST`,
                credentials: `include`,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'firstName': this.state.firstName,'lastName':this.state.lastName, 'age': this.state.age,
                    'password':this.state.password, 'email': this.state.email })
            }).then((res) => {
                if(res.status === 200) {
                    res.json().then((response) => {
                        localStorage.setItem('token',response.user._id)
                        if(response.user._id){
                            this.props.history.push('/home');
                        }else{
                            this.setState({class:'error',errorMsg: 'Unable to Register'});
                        }
                    })
                }
            })
            .catch((error) => {
                console.log("error----", error);
            });
    }

    login = (event) => {
        event.preventDefault();
        this.props.history.push('/');
        
    }
    
    render = () => {
        let message;
        if(this.state.errorMsg){
          message = <MessageBar errorMsg={this.state.errorMsg} className={this.state.class}/>
        }
        return(
            <div className="container jumbotron login-panel margin-top-login">
                {message}
                <form className="form-signin">
                    <h2 className="sub-header">Please sign up</h2>
                    <input type="text" value={this.state.firstName} onChange={this.firstNameChange} className="form-control" placeholder="Enter first name" required autoFocus />
                    <br></br>
                    <input type="text" value={this.state.lastName} onChange={this.lastNameChange} className="form-control" placeholder="Enter last name" required />
                    <br></br>
                    <input type="text" value={this.state.age} onChange={this.ageChange} className="form-control" placeholder="Enter Age" required />
                    <br></br>
                    <input type="email" value={this.state.email} onChange={this.emailChange} className="form-control" placeholder="Email address" required autoFocus />
                    <br></br>
                    <input type="password" value={this.state.password} onChange={this.passwordChange} className="form-control" placeholder="Password" required />
                    <br></br>

                    <div className='form-group'>
                    <button onClick={this.onRegister} className="btn btn-primary btn-lg btn-block login-btn" type="submit">Register</button>
                    </div>
                    <div className='form-group'>
                    <button onClick={this.login} className="btn btn-default btn-lg btn-block" type="submit">Sing In</button>
                    </div>
                    {/* <button onClick={this.onRegister} className="btn btn-primary" type="submit">Register</button>
                    &nbsp;
                    <button onClick={this.login} className="btn btn-default" type="submit">Sign in</button> */}
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

export default connect(mapStateToProps)(Register);