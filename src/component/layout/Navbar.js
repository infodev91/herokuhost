import React from 'react';
import { Link ,NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" exact to="/">React User</NavLink>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/about">About</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/contact">Contact</NavLink>
                </div>
                
            </div>
            <Link className="btn btn-outline-light" to="/user/add">Add User</Link>
        </nav>
        </div>
    );
}

export default Navbar;
