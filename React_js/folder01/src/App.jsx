import React from 'react';
import './app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import HSect from './assets/components/hSect';
import Navbar from './assets/components/navbar';
import Course from './assets/components/course';
import Contact from './assets/components/contact';
function App() {
  return (
    <Router> {/* Wrap everything in BrowserRouter for routing */}
    
    <Navbar/> 
    
      {/* Navbar is always visible */}
      <Routes> {/* Define routes here */}
        <Route path="/" element={<HSect/>} /> {/* Home page */}
        <Route path="/course" element={<Course />} /> {/* Courses page - this links to your Course component */}
        {/* Add more routes as needed, e.g., <Route path="/notes" element={<Notes />} /> */}
        
      </Routes>
    <Course />
    <Contact/>
    </Router>
    
  );
}

export default App;