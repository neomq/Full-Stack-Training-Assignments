import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
