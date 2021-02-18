import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/transactions'}>
                        <span className="nav-link">My Transactions</span>
                    </Link>
                    <button className="nav-link" onClick={this.logoutUser}>
                        Logout
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to='/signup'>
                        <span className="nav-link">Signup</span>
                    </Link>
                    <Link to='/login'>
                        <span className="nav-link">Login</span>
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className='nav-container'>
                <div className='home'><Link to='/'><h1>TransBank</h1></Link></div>
                <div className='links'>
                    {this.getLinks()}
                </div>
            </div>
        );
    }
}

export default NavBar;