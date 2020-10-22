import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Winner.css';

export class Winner extends React.Component {

    render() {
        return (
            <div>
                <div className="congrats">
                    <p>Congratulations!</p>
                    {this.props.winner.map((item, index) => {
                        if (item.count === this.props.max && this.props.max!== 0) {
                            return (
                                <div key={index}>
                                    <p className="winner"><b>{item.subject} won with {this.props.max} counts</b></p>
                                </div>)
                        }
                        return null;
                    })}
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy6BSz58E25h4rKHtgZ37lDxGsDhOIYPKKpQ&usqp=CAU"
                            alt="winner"></img>
                    </div>
                </div>
                <div>
                    <Navbar expand="lg">
                        <Nav>
                            <NavLink className="p-5 fixed-top bg-21 text-light" to="/Vote" >Go back</NavLink>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Winner;