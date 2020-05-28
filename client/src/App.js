import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import SlideDiv from './components/SlideDiv';
import Menu from './components/Menu';
import MyOrders from './components/MyOrders';
import About from './components/About';
import Contact from './components/Contact';
import { loadUser } from "./actions";
import {BrowserRouter as Router, Route}  from 'react-router-dom';

  
function App() {

  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    loadUser(dispatch, token);  
  }, []);
  
  return (
    <div>
      <h4>Hello</h4>
    </div>

  );
}

export default App;

