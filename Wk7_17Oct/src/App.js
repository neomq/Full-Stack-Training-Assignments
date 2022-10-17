import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';

function App() {

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blogpost" element={<BlogPost/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
