import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Subjects } from './Subjects';
import { Navigation } from './Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import { NewSub } from './NewSub';
import { Pass } from './Pass';
import WinPass from './WinPass';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
// import {checkIcon} from './check.svg';



function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h3 className="m-3 d-flex justify-content-center">React Voting Application</h3> */}
        <Navigation />
        <div  className="container">
        <Route exact path='/Subjects' component={Subjects} />
        <Route exact path='/Vote' component={Pass} />
        <Route exact path='/WinPass' component={WinPass} />
        <Route exact path='/NewSub' component={NewSub} />
        <Route exact path='/Update' component={Update} />
        </div>
      </div>
      <ToastContainer
        draggable={true}
        transition={Zoom}
        autoClose={2000}
        position={"top-center"}
        closeOnClick={true}
        hideProgressBar={true}
        pauseOnHover={true} />
    </BrowserRouter>
  );
}

export default App;
