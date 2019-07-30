import React from "react";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {

    const links = [
        {name: 'Product', url: '/product'},
        // {name: '404 Error', url: '/404Error'},

    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink activeClassName={'activeNavLink'}
                         to={link.url} exact>{link.name}</NavLink>
            </li>
        );
    });

    return (
        <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
                <li className='nav'>
                    <NavLink activeClassName={'activeNavLink'} to='/' exact>Home</NavLink>
                </li>
                {linksComponents}
            </ul>
        </div>
    );
};

export default Sidebar;