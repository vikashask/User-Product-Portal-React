import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import NavBar from '../layout/NavBar';

const Header = (props) => {

    let logout = (event) =>{
      event.preventDefault();

console.log("props------------",this.props);

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

// Header.propTypes ={
//     logout:PropTypes.func.isRequired
// }
export default Header;