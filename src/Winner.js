import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Winner.css';

export class Winner extends React.Component {


    render() {
        return (
            <div>
                <div class="congrats">
                <p>The winner is</p>
                {this.props.winner.map((item,index) => {
                    if(item.count === this.props.max) {
                        return ( 
                       <div>
                           <p><b><u> {item.subject}</u></b></p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy6BSz58E25h4rKHtgZ37lDxGsDhOIYPKKpQ&usqp=CAU"></img>
                       </div> )
                    }
                })}
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