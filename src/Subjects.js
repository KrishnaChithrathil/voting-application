import React from 'react';
import Table from './Table';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NewSub';
import './Subjects.css'
// import {Forms} from './Form'

export class Subjects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sublist: [],
      search: '',
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
    // window.location.reload(true);
  }

  delete = (e) => {
    var result = window.confirm("Are you sure you want to delete?");
    if (result) {
      const objArray = this.state.sublist;
      objArray.splice(objArray.indexOf(e), 1);
      localStorage.setItem("sublist", JSON.stringify(objArray));
      this.setState({ sublist: objArray });
      window.location.reload(true);
    }
  }

  sortMyObjArray = () => {
    const objArray = this.state.sublist;
    objArray.sort((a, b) => {
      let textA = a.subject.toLowerCase();
      let textB = b.subject.toLowerCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    localStorage.setItem("sublist", JSON.stringify(objArray));
    this.setState({ sublist: objArray });
  }
  sortZtoA = () => {
    const objArray = this.state.sublist;
    objArray.sort((a, b) => {
      let textA = a.subject.toLowerCase();
      let textB = b.subject.toLowerCase();
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    })
    localStorage.setItem("sublist", JSON.stringify(objArray));
    this.setState({ sublist: objArray });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar>
            <Nav>
              <NavLink to="/NewSub" ><button className="btncls">Add New</button></NavLink>
            </Nav>
          </Navbar>
        </div>
        <div className="d-flex justify-content-left">
          <Table comp={this.state.sublist}
            statusUpdate={this.statusUpdate.bind(this)}
            delete={this.delete}
            sortMyObjArray={this.sortMyObjArray}
            edit={this.update} 
            sortZtoA={this.sortZtoA}/>
        </div>
      </div>
    );
  }
}
export default Subjects;