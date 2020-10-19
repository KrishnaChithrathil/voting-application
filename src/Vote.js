import React from 'react'
import './Vote.css'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Vote extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <table className="table-style">
                        <thead>
                            <tr>
                                <th>Active Subject</th>
                                <th>Vote Count</th>
                                <th>Mark your Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.sublist.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.subject}</td>
                                    <td><b>{item.count}</b></td>
                                    <td><button className="btnn" id={item.id} onClick={() => { this.props.buttonClick(item.id, item.count) }}>Vote</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <Navbar>
                        <Nav>
                            <NavLink to="/WinPass" >
                                <button className="btn01">Click to see who Won!!!</button>
                            </NavLink>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default Vote
