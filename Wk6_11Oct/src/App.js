import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
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
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;