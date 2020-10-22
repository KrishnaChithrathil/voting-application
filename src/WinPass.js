import React from 'react';
import { Winner } from './Winner';


export class WinPass extends React.Component {

    constructor(props) {
        super();
        this.state = {
          sublist: [],
        }
      }
        componentDidMount() {
          let localStorageList = (localStorage.getItem('sublist'));
          if(localStorageList) {
            this.setState({sublist: JSON.parse(localStorageList)});
          }
        }

    render() {
      let activeList = this.state.sublist.filter(x => x.status === "Active")
        return (
            <div>
                <Winner max = {Math.max.apply(null, activeList.map(item => item.count))}
                winner = {this.state.sublist.sort((b, a) => parseFloat(a.count) - parseFloat(b.count))}></Winner>
            </div>
        );
    }
}

export default WinPass;
