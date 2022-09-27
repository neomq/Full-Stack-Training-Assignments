import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Conditional from './components/Conditional';
import Getapi from './components/Getapi';
import Postapi from './components/Postapi';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Postapi/>} />
          <Route path="/postapi" element={<Postapi/>} />
          <Route path="/getapi" element={<Getapi/>} />
          <Route path="/conditional" element={<Conditional/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;