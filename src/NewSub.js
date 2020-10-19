import React from 'react';
import { Forms } from './Form';
// import { Navbar, Nav } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

export class NewSub extends React.Component {



  render() {
    return (
      <div className="mt-5 d-flex justify-content-left">
        <div>
          <Forms />
        </div>
        {/* <div>
          <Navbar expand="lg">
            <Nav>
              <NavLink className="p-3 fixed-top bg-dark text-white" to="/Subjects" >Go back</NavLink>
            </Nav>
          </Navbar>
        </div> */}

      </div>
    );
  }
}

export default NewSub;
