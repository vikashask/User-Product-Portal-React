import React from 'react';
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";
import logo from './../../../src/logo.svg';
import PropTypes from 'prop-types';

// funcion component 
// passing props
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
          {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button> */}
          <a className="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
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

