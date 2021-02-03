import React from 'react';
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Card from './Components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <div className=" card-container">
      <Card/>
    </div>
    
  );
}

export default App;
