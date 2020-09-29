import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar';
import Items from './components/Items';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Items />
    </div>
  );
}

export default App;
