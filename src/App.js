import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      <Dinner dishName="Nihaari" sweetDish="Kheer"/>
      <hr/>
      <Dinner dishName="Biryani" sweetDish="Jalebi"/>
      <hr/>
      <Dinner dishName="Karahi" sweetDish="Gajar ka Halwa"/>
      <hr/>
    </div>
  );
}

export default App;
