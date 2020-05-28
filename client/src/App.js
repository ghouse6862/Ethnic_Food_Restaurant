import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import SlideDiv from './components/SlideDiv';
import Menu from './components/Menu';
import MyOrders from './components/MyOrders';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import {BrowserRouter as Router, Route}  from 'react-router-dom';

  
function App() {
  
  return (
    <div>
      <AppNavbar />
      <About />
      <Contact />
    </div>

  );
}

export default App;

