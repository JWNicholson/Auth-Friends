import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
    <div className="header">
        <Link to='/friends' className="logo"><h1>My friends list</h1></Link>
        <div className="nav">
            <Link to='/friends'><button>Friends</button></Link>
            <Link to='/add'><button>Add a friend</button></Link>
            <Link to='/login'><button className="login-button">Log In</button></Link>
        </div>
    </div>
    )
}