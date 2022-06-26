import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import App_Header from './components/App_Header';
import Footer from './components/Footer'
import Login from "./components/Login";
import Sign_Up from "./components/Sign_Up";
import Forget_pass from "./components/Forget_pass";
import Home from "./Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Sign_up" element={<Sign_Up/>}/>
        <Route path="/Forget_pass" element={<Forget_pass/>}/>
        <Route path="/user" element={<Home/>}/>
      </Routes>
  );
}

export default App;
