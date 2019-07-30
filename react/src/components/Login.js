import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from '../utils/Utils';
import * as Constants from '../utils/Constants';


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
                console.log("res",res);
                if(res.status === 200) {
                    this.props.history.push('/home');
                }
            })
            .catch((error) => {
                console.log("error----", error);
            });
    }
    
    render = () => {
        return(
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <input type="email" id="inputEmail" value={this.state.email} onChange={this.emailChange} className="form-control" placeholder="Email address" required autoFocus />
                    <br></br>
                    <input type="password" id="inputPassword" value={this.state.password} onChange={this.passwordChange} className="form-control" placeholder="Password" required />
                    <br></br>
                    <button onClick={this.login} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
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

export default connect(mapStateToProps)(Login);