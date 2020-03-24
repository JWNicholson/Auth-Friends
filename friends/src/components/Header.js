import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="header">
            <Link to='/friends' className="logo"><h1>My friends list</h1></Link>
            <div className="nav">
                <Link to='/login'><button className="login-button">Log in</button></Link>
                <Link to='/friends'><button>Friends list</button></Link>
                <Link to='/add'><button>Add friend</button></Link>
            </div>
        </div>
    )
}