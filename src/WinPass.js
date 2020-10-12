import React from 'react';
import { Winner } from './Winner';


export class NewSub extends React.Component {

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
        return (
            <div>
                <Winner max = {Math.max.apply(null, this.state.sublist.map(item => item.count))}
                winner = {this.state.sublist.sort((b, a) => parseFloat(a.count) - parseFloat(b.count))}></Winner>
                {/* <Winner max = {Math.max.apply(null, this.state.sublist.map(item => (item.count, item.subject)))}/> */}
                {/* <Winner sublist={this.state.sublist.filter(x => x.count > 0)}/> */}
            </div>
        );
    }
}

export default NewSub;
