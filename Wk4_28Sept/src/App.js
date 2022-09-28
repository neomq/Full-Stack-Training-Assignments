import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
