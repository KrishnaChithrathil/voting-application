import React from 'react';
import { faTrash, faPlus, faEdit, faAngleUp, faAngleDown, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ButtonToolbar } from 'react-bootstrap';
import { Model } from './Model.js';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './Table.css'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';
library.add(faTrash, faEdit, faPlus, faAngleUp, faAngleDown, faSort);



export class Table extends React.Component {
  constructor(props) {
    super();
    this.state = {
      search: '',
      currentPage: 1,
      subjectsPerPage: 9,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value.toUpperCase() });
  }

  render() {
    let obj = this.props.comp
    if (this.state.search) {
      obj = this.props.comp.filter((searchContent) => {
        if (searchContent.subject.includes(this.state.search))
          return searchContent;
      })
    }
    const { currentPage, subjectsPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastSubject = currentPage * subjectsPerPage;
    const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;
    const currentTodos = obj.slice(indexOfFirstSubject, indexOfLastSubject);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(obj.length / subjectsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button className="paginationbtn"
          key={number}
          id={number}
          onClick={this.handleClick}>
          {number}
        </button>
      );
    });

    return (
      <div>
        <div>
          <Navbar>
            <Nav>
              <NavLink to="/NewSub" ><button className="btncls">Add New</button></NavLink>
            </Nav>
          </Navbar>
        </div>
        <div className="ttext">
          <input type="text" className="textboxx"
            value={this.state.search}
            onChange={this.updateSearch}
            placeholder="Search by Subject" />
          <button className="searchbtn">Search</button>
        </div>
        <div className="ttable">
          <table className="table-styleee">
            <thead>
              <tr>
                <th><u>Subject </u><FontAwesomeIcon onClick={this.props.sortMyObjArray} icon="angle-up"></FontAwesomeIcon>
                  <span> </span> <FontAwesomeIcon onClick={this.props.sortZtoA} icon="angle-down"></FontAwesomeIcon></th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentTodos.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className="expand">{item.subject}</td>
                    <td><p className="expand-maximum-on-hover">{item.describe}</p></td>
                    <td><h6 className={item.status} onClick={() => { this.props.statusUpdate(item.id, item.status) }}>{item.status}</h6>
                    </td>
                    <td> <Link to={{ pathname: '/Update', subjectName: item.subject }}><FontAwesomeIcon icon="edit" onClick={this.editme} ></FontAwesomeIcon></Link>
                      &nbsp;&nbsp;
                      <FontAwesomeIcon className="FontAwesomeIcon" onClick={() => this.props.delete(item.id)} icon="trash"></FontAwesomeIcon>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <p>Showing {currentTodos.length} entries out of {obj.length} {renderPageNumbers}</p>
        </div>
      </div>
    );
  }
}

export default Table;