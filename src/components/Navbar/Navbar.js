import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">GoT Card Game</a>
      </li>
      <li>Click an image to begin!</li>
      <li>Score: 0 | Top Score: 0</li>
    </ul>
  </nav>
);

export default Navbar;