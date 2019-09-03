import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
    render() {
        var isActive = this.context.router.route.location.pathname === this.props.to;
        var className = isActive ? 'active' : '';
        return(
            <li className={className}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}
NavBar.contextTypes = {
    router: PropTypes.object
};

export default NavBar;