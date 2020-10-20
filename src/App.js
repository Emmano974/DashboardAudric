import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Side from './Components/Header/Side'
import DashBoard from './Components/Content/Dashboard/Dashboard';
// import IndexContent from './Components/IndexContent';


function App() {


  return (
    <div className="App">
    <Side/>
      {/* <Route exact path='/Side' component={Side} />
      <Route exact path="/Login" component={Login} /> */}
    </div>
  );
}

export default App;