import React from 'react';
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";
import logo from './../../../src/logo.svg';

// funcion component 
// passing props
const Header = (props) => {

    let logout = () =>{
        console.log("logout");
        localStorage.removeItem('token');
        // window.location.href = "http://localhost:3000/";
    }
    return (
        <header className='header'>

            <button onClick={logout} className="btn btn-primary" type="submit">Logout</button>

            <Link to={'/'}>
                <Image src={logo} className={'header-logo'} />
            </Link>

            <div className={'header-text'}>
                {props.subtitle}
            </div>

        </header>
    );
};

export default Header;

