import React from 'react';
import {Link} from "react-router-dom";
// import {Image} from "react-bootstrap";
// import logo from './../../../src/logo.svg';
import PropTypes from 'prop-types';

const Header = (props) => {

    let logout = () =>{
        console.log("logout");
        localStorage.removeItem('token');
        // window.location.href = "http://localhost:3000/";
    }
    return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Project name</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/home">Home</a>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="/" onClick={logout}>Logout <span className="sr-only">(current)</span></a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
        // <header classNameName='header'>

        //     <button onClick={logout} classNameName="btn btn-primary" type="submit">Logout</button>

        //     <Link to={'/'}>
        //         <Image src={logo} classNameName={'header-logo'} />
        //     </Link>

        //     <div classNameName={'header-text'}>
        //         {props.subtitle}
        //     </div>

        // </header>
    );
};

Header.propTypes ={
    logout:PropTypes.func.isRequired
}
export default Header;