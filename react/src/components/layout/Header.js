// import React from 'react';
import React,{Component} from 'react';

import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import NavBar from '../layout/NavBar';

class Header extends Component {
  constructor(props){
    super(props);
}

handleLogout = () => {
  console.log('props here', this.props.historyPush);
   this.props.historyPush.push('/');
}

render() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Project name</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <NavBar to="/home">
              Home
            </NavBar>
            <NavBar to="/test">
              Test
            </NavBar>
            <NavBar to="/user">
              User
            </NavBar>
            <NavBar to="/manage-question">
              Manage Question
            </NavBar>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <button onClick={this.handleLogout}>Logout <span className="sr-only">(current)</span></button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
};
export default Header;