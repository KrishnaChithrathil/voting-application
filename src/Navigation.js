import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Nav, Navbar } from 'react-bootstrap';
import './Vote';
import './Subjects';
import './App.css'

export class Navigation extends Component {
    render() {
        return (
            <div className="navstyle"> 

                <NavLink className="d-inline p-2 bg-primary text-light" to="/Subjects" >Subject</NavLink>
                <NavLink className="d-inline p-2 bg-primary text-light" to="/Vote" >Vote</NavLink>
            </div>
        );
    }
}

export default Navigation;