import React from 'react';
import { faTrash, faPlus, faEdit, faAngleUp, faAngleDown, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ButtonToolbar } from 'react-bootstrap';
import { Model } from './Model.js';
import './Table.css'
library.add(faTrash, faEdit, faPlus, faAngleUp, faAngleDown, faSort);



export class Table extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modelShow: false,
      search : '',
    }
  }
  updateSearch =(e)=> {
    this.setState({search:e.target.value.toUpperCase()});
  }

  render() {
    let obj = this.props.comp
    obj = this.props.comp.filter((searchContent) => {
      return searchContent.subject.indexOf(this.state.search) !== -1;
    })
    let modelClose = () => this.setState({ modelShow: false }); /* on page load and close button click, it'll be false */
    return (
      <div>
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
              {obj.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className="expand">{item.subject}</td>
                    <td><p className="expand-maximum-on-hover">{item.describe}</p></td>
                    <td><h6 className={item.status} onClick={() => { this.props.statusUpdate(item.id, item.status) }}>{item.status}</h6>
                    </td>
                    <td>
                      <FontAwesomeIcon onClick={() => this.setState({ modelShow: true })} icon="edit"></FontAwesomeIcon>
                      &nbsp;&nbsp;
                      <FontAwesomeIcon onClick={() => this.props.delete(item)} icon="trash"></FontAwesomeIcon>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <ButtonToolbar>
          <Model show={this.state.modelShow}
            onHide={modelClose} />
        </ButtonToolbar>
      </div>
    );
  }
}

export default Table;