import React from 'react';
import './Footer.css'; // Import the CSS file for Footer (if needed)

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright © {new Date().getFullYear()} Ahmed Ansari - D22CS080</p>
      <p>Email Me @ d22cs080@charusat.ac.in</p>
      {/* Contact information or additional content */}
    </footer>
  );
}

export default Footer;
