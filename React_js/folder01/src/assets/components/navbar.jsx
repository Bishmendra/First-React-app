import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for SPA navigation
 // Assuming you have styles here

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">Your Logo</div>
        <ul className="menu"> {/* Fixed: class -> className */}
          <li><Link to="/">Home</Link></li> {/* Changed to Link for SPA */}
          <li><Link to="/course">Courses</Link></li> {/* Changed to Link; this will render the Course component */}
          <li><a href="#">Notes</a></li> {/* Kept as <a> if you want full reload, or change to Link */}
          <li><a href="/contact">Contact</a></li> {/* Same as above */}
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="buttons">
          <button className="login-button">Login</button> {/* Fixed: class -> className */}
          <button className="signup-button">Signup</button> {/* Fixed: class -> className */}
          <button className="mode-button">Mode</button> {/* Fixed: class -> className */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;