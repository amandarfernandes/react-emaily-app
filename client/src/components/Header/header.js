import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from '../Payments/Payments';


class Header extends Component {
    renderNav() {
        switch (this.props.auth) {
            case null :
                return <li>Loading</li>;
            case false: 
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:    
                return [
                <li key="1" ><Payments /></li>,
                <li style={{margin:'0 5px'}} key="2" >Credits: {this.props.auth.credits}</li>,
                <li key="3" ><a href="/auth/logout">Logout</a></li>
            ]
        }
    }
    render() {
        
        return (
        <nav>
            <div className="nav-wrapper">
                <Link to={this.props.auth ? '/surveys':'/'} 
                className="left brand-logo">Emaily</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderNav()}
                </ul>
        </div>
        </nav>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
});
export default connect(mapStateToProps)(Header);