import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from '../utils/Utils';
import * as Constants from '../utils/Constants';
import MessageBar from '../components/shared/MessageBar'
import {loadAllData,loadAuthenticate} from "./../actions/dataAction"

class Login extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
            email:'',
            password:'',
            validated:false,
            class:'error',
            errorMsg:''
 
        }
        this.passwordChange = this.passwordChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }

    // getting all data from store from home component
    componentDidMount = () =>{
        console.log("getting all data from store from home component---",this.props.allData);
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

    login = (event) => {
		event.preventDefault();
        fetch(Constants.baseURL + 'login',
            {
                method: `POST`,
                credentials: `include`,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'email': this.state.email,'password':this.state.password })
            }).then((res) => {
                if(res.status === 200) {
                    res.json().then((response) => {
                        console.log('response',response);
                        if(response && response._id){
                            localStorage.setItem('token',response._id);
                            this.props.loadAuthenticate({token:response._id,isAdmin:response.isAdmin?true:false});
                            this.props.history.push('/home');
                        }else{
                            this.setState({class:'error',errorMsg: 'Invalid login details'});
                        }
                    })
                }
            })
            .catch((error) => {
                console.log("error----", error);
            });
    }
    
    register = (event) => {
        event.preventDefault();
        this.props.history.push('/register');
        
    }
    
    render = () => {
        let message;
        if(this.state.errorMsg){
          message = <MessageBar errorMsg={this.state.errorMsg} className={this.state.class}/>
        }
        return(
            <div className="container jumbotron margin-top-login">
                {message}
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label className="sr-only">Email address</label>
                    
                    <input type="email" id="inputEmail" value={this.state.email} onChange={this.emailChange} className="form-control" placeholder="Email address" required autoFocus />
                    <br></br>
                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" value={this.state.password} onChange={this.passwordChange} className="form-control" placeholder="Password" required />
                    <br></br>
                    <div className='form-group'>
                    <button onClick={this.login} className="btn btn-primary btn-lg btn-block login-btn" type="submit">Sign in</button>
                    </div>
                    <div className='form-group'>
                    <button onClick={this.register} className="btn btn-default btn-lg btn-block" type="submit">Register</button>
                    </div>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadAllData,
    loadAuthenticate
},dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login);