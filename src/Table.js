import { render } from '@testing-library/react';
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './Table.css'


export class Table extends React.Component {


  render() {
    // let btn_class = this.state.green ? "greenButton" : "whiteButton";
    return (
      <div>
        <table class="table-styleee">
          <tr class="table-style-001">
            <th class="table-style-002">Language</th>
            <th class="table-style-002">Status</th>
          </tr>
          <tbody>
          {this.props.comp.map((item, index) => {
            return (
              <tr>
                <th class="table-style-001">{item.subject}</th>
                <td class="table-style-001"><button class="addbtnn" onClick={() => { this.props.statusUpdate(item.id, item.status) }}>{item.status}</button></td>
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
