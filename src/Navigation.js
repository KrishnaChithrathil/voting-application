import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Nav, Navbar } from 'react-bootstrap';
import './Vote';
import './Subjects';
import './App.css'

export class Navigation extends Component {
    render() {
        return (
            // <div className="navstyle"> 
            //     <NavLink className="d-inline p-2 bg-primary text-light" to="/Subjects" >Subject</NavLink>
            //     <NavLink className="d-inline p-2 bg-primary text-light" to="/Vote" >Vote</NavLink>
            // </div>
            
            <nav className="navbar p-3 navbar-expand navbar-dark bg-21">
            <div className="navbar-nav ml ">
                <li className="nav-item">
                    <Link to={"/subjects"} className="nav-link text-light">
                        Subjects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/vote"} className="nav-link text-light">
                        Voting
                    </Link>
                </li>
            </div>
        </nav>
        );
    }
}

export default Navigation;