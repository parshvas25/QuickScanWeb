import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar';
import Items from './components/Items';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Items />
      <Cart />
    </div>
  );
}

export default App;
