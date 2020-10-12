import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './Vote';
import './Subjects';

export class Navigation extends Component {  
    render() {
        return (
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Subjects" >Subject</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Vote" >Vote</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Navigation;