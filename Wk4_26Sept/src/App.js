import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Postapi from './components/Postapi';
import Conditional from './components/Conditional';
import Getapi from './components/Getapi';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Postapi />} />
          <Route path="/postapi" element={<Postapi />} />
          <Route path="/conditional" element={<Conditional />} />
          <Route path="/getapi" element={<Getapi />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
