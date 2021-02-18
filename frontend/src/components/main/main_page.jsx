import React from 'react';
import { Link } from "react-router-dom";

class MainPage extends React.Component {
    render() {
        return (
            <div className='main-page'>
                <h1>Bank of Estateably</h1>
                <h2>Manage your transactions!</h2>
                <div><Link className="main-links" to="/signup">Sign Up</Link></div>
                <div><Link className="main-links" to="/login">Log In</Link></div>
            </div>
        )
    }
}

export default MainPage;