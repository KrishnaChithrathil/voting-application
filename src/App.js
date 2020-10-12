import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Subjects} from './Subjects';
import {Navigation} from './Navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import {NewSub} from './NewSub';
import {Pass} from './Pass';
import WinPass from './WinPass';


function App() {
    return (
      <BrowserRouter>
      <div className="container">
          <h3 className="m-3 d-flex justify-content-center">React Voting Application</h3>
          <Navigation/>
          <Route path='/Subjects' component={Subjects}/>
          <Route path='/Vote' component={Pass}/>
          <Route path='/WinPass' component={WinPass}/>
          <Route path='/NewSub' component={NewSub}/>
      </div>
      </BrowserRouter>
      
    );
  }

export default App;
