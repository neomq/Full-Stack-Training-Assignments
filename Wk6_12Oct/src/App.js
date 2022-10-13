import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import User from './components/User';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/users" element={<User/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
