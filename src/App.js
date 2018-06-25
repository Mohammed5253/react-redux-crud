import React, { Component } from 'react';
import './App.css';
import AllEmp from './containers/AllEmp';
import EmpForm from './containers/EmpForm';



class App extends Component {
  render() {
    return (
      <div className="App">
        <AllEmp />
      </div>
    );
  }
}

export default App;
