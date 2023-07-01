import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from './pages/Works.jsx';
import Contact from "./pages/Contact.jsx";
import './styles/App.scss';

const App = () => {
  return <Router>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/works" element={<Works/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>;
};

export default App;
