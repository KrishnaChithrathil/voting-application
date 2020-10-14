// import { render } from '@testing-library/react';
import React from 'react';
// import * as ReactBootStrap from "react-bootstrap";
import './Table.css'


export class Table extends React.Component {


  render() {
    // let btn_class = this.state.green ? "greenButton" : "whiteButton";
    return (
      <div>
        <table className="table-styleee">
          <thead>
          <tr className="table-style-001">
            <th className="table-style-002">Language</th>
            <th className="table-style-002">Status</th>
          </tr>
          </thead>
          <tbody>
            {this.props.comp.map((item, index) => {
              return (
                <tr key={index}>
                  <th className="table-style-001">{item.subject}</th>
                  <td className="table-style-001"><button className="addbtnn" onClick={() => { this.props.statusUpdate(item.id, item.status) }}>{item.status}</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
