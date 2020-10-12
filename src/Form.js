import React from 'react';
import './Form.css'
export class Form extends React.Component {

  userdata;
  constructor(props) {
    super();
    this.state = {
      sub: '',
      description: '',
    }
  }

  changeSubject=(e)=> {
    this.setState({ sub: e.target.value });
  }
  changeDesc=(e)=> {
    this.setState({ description: e.target.value });
  }
  pageSubmit=(e) => {
    e.preventDefault();
    if(localStorage.getItem("sublist") == null) {
      localStorage.setItem("sublist", '[]');
    }
    let previousList = JSON.parse(localStorage.getItem('sublist'));
    let NewsubjectObjectWithNameDescription = {subject:this.state.sub, count: 0, id:previousList.length, status: 'Inactive'}
    previousList.push(NewsubjectObjectWithNameDescription);
    localStorage.setItem("sublist", JSON.stringify(previousList));
  }
  // desc:this.state.description

  render() {
    return (
      <div className="form-group">
        <form>
          <div>
            <label>Subject</label>
            <input type="text" className="form"  onBlur={this.changeSubject} />
          </div>
          <div>
            <label>Description</label>
            <input type="text" className="form" value={this.state.desc} onBlur={this.changeDesc} />
          </div>
          <div><button type="submit" className="btn" onClick={this.pageSubmit}>Submit</button></div>
        </form>
        <div >
          {/* <p>{this.state.sub}</p> */}
        </div>
      </div>
    );
  }

}
export default Form;
