import React from 'react';
import './Form.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export class Forms extends React.Component {

  userdata;
  constructor(props) {
    super();
    this.state = {
      sub: '',
      description: '',
      suberr: ''
    }
  }

  changeSubject = (e) => {
    this.setState({ sub: e.target.value.toUpperCase() });
  }
  changeDesc = (e) => {
    this.setState({ description: e.target.value });
  }
  pageSubmit = (e) => {
    if (localStorage.getItem("sublist") == null) {
      localStorage.setItem("sublist", '[]');
    }
    let previousList = JSON.parse(localStorage.getItem('sublist'));
    let NewsubjectObjectWithNameDescription = { subject: this.state.sub, describe:this.state.description, count: 0, id: previousList.length, status: 'Inactive' }
    const found = previousList.some(el => el.subject === this.state.sub);
    if (this.state.sub === '') {
      e.preventDefault();
      this.setState({ suberr: "*Subject cannot be null. Please provide a value" })
      toast.warning("Subject cannot be null.")
    }
    else if (!found) {
      previousList.push(NewsubjectObjectWithNameDescription);
      localStorage.setItem("sublist", JSON.stringify(previousList));
      toast.success("Subject added successfully", { icon: toast.checkIcon })
    } else {
      this.setState({ suberr: "*This Subject already exists. Please try other." })
      e.preventDefault();
      toast.error("Ooops! Duplicate entry");
      // window. location.reload(true);
    }
  }

  render() {
    return (
      <div className="form-group">
        <form >
          <div>
            <label>Subject</label>
            <input type="text" className="form" onBlur={this.changeSubject} noValidate />
            <p style={{ color: "red" }}>{this.state.suberr}</p>
          </div>
          <div>
            <label>Description</label>
            <input type="text" onBlur={this.changeDesc} className="form" />
          </div>
          {/* <div><button type="submit" className="btn" onClick={this.pageSubmit}>Submit</button></div> */}
          <div>
            <Link to="/Subjects">
              <button onClick={this.pageSubmit} className="btn">Submit</button></Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Forms;