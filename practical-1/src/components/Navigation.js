import React from 'react';
import './Navigation.css'; // Import the CSS file for the Navigation component

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
