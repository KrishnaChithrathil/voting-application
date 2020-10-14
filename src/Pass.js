import React from 'react';
import Vote from './Vote';

export class Pass extends React.Component {
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
  buttonClicked = (id, count) => {
    const objArray = this.state.sublist;
    objArray.map(item => {
      if (item.id === id) {
        return (item.count = item.count + 1);
        // alert("hey");
      }
      return null;
    })
    // alert("hey")
    localStorage.setItem("sublist", JSON.stringify(objArray));
    this.setState({ sublist: objArray });
  }



  render() {
    return (
      <div className="container">
        <Vote sublist={this.state.sublist.filter(x => x.status === "Active")}
          buttonClick={this.buttonClicked} />

      </div>
    );
  }
}

export default Pass;
