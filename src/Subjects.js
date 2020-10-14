import React from 'react';
import Table from './Table';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NewSub';
import './Subjects.css'

export class Subjects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sublist: [],
    }
  }
  componentDidMount() {
    let localStorageList = (localStorage.getItem('sublist'));
    if (localStorageList) {
      this.setState({ sublist: JSON.parse(localStorageList) });
    }
  }



  statusUpdate(id, status) {
    const objArray = this.state.sublist;
    objArray.map(item => {
      if (item.id === id) {
        if (status === "Inactive") {
          item.status = "Active";
        } else {
          item.status = "Inactive"
        }
      }
      return null;
    })
    localStorage.setItem("sublist", JSON.stringify(objArray));
    this.setState({ sublist: objArray });
  }

  render() {
    return (
      <div>
        <div className="mt-5 d-flex justify-content-left">
          <Table comp={this.state.sublist} statusUpdate={this.statusUpdate.bind(this)} />
        </div>
        <div>
          <Navbar>
            <Nav>
              <NavLink to="/NewSub" ><button className="btncls">Add New Subject</button></NavLink>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Subjects;
