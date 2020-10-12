import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Winner.css';

export class Winner extends React.Component {


    render() {
        return (
            <div>
                <div class="congrats">
                    {/* <h1><b>The winner is {this.props.winner}</b></h1> */}
                    <h1><b>The winner is {this.props.max}</b></h1>
                </div>
                <div>
                {this.props.winner.map((item,index) => (
                                <p>{item.count}</p>

                        ))}
                </div>
                <div>
                    <Navbar expand="lg">
                        <Nav>
                            <NavLink className="p-5 fixed-top bg-dark text-white" to="/Vote" >Go back</NavLink>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Winner;