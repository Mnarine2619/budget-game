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
      <Card category= 'Food:' title='Chicken Wings' />
      <Card category= 'Food:' title='Fried Rice' />
      <Card category= 'Movie:' title='Bumbelbee(2018)'/>
       <Card category= 'Movie:' title='Friday'/>
      <Card category= 'Activity:' title='Playing Volleyball'/>
      <Card category= 'Activity:' title='Going out to fun places'/>
      <Card category= 'Video Games:' title='Grand Theft'/>
       <Card category= 'Video Games:' title='Call of Duty'/>
      
      
    </div>
    </div>
  );
}

export default App;
