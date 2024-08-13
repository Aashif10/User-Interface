import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Navbar = () => {
  return <div>
      <nav className="navbar">
        <span>MERN APPLICATION</span>
        <Link to="/create">Create Post</Link>
        <Link to="/all">All Post</Link>
      </nav>
 
    </div>;
};

export default Navbar;
