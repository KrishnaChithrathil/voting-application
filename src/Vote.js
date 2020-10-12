import React from 'react'
import './Vote.css'
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Vote extends React.Component {


    render() {
        return (
            <div>
                <table class="table-style">
                    <tr class="table-style-01">
                        <th class="table-style-02">Active Subject</th>
                        <th class="table-style-02">Vote Count</th>
                        <th class="table-style-02">Mark your Vote</th>
                    </tr>
                    <tbody>
                        {this.props.sublist.map((item, index) => (
                            <tr>
                                <th>{item.subject}</th>
                                <td>{item.count}</td>
                                <td><button class="btnn" id={item.id} onClick={() => { this.props.buttonClick(item.id, item.count) }}>Vote</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <Navbar>
                        <Nav>
                            <NavLink to="/WinPass" >
                                <button class="btncls">Click to see who Won!!!</button>
                            </NavLink>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default Vote
