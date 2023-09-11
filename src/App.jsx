import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import Contact from "./pages/Contact.jsx";
import "./styles/App.scss";

// Custom Loader Component (You can style it as per your requirement)
import Loader from './Components/Loader.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching data) that takes some time
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulating a 5-second loading time; replace this with your actual loading logic
  }, []);

  return (
    <Router>
      {loading ? ( // Render the loader while loading is true
        <Loader />
      ) : (
        // Render the content when loading is false
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
