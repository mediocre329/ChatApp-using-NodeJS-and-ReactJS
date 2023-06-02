import logo from './logo.svg';
import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Chat from './pages/Chat';


function App() {
  return (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
