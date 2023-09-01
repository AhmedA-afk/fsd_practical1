import React from 'react';
import './Sidebar.css'; // Import the CSS file for the Sidebar component

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Social Links</h3>

      {/* Social media links */}
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100004944645046">Facebook</a>
        <a href="https://twitter.com/Ahmed1Ansari">Twitter</a>
        <a href="https://www.linkedin.com/in/ahmed-1-ansari/">LinkedIn</a>
        {/* Add more social media links as needed */}
      </div>

      {/* Quote section */}
      <div className="quote-section">
        <h3>Quote of the Day</h3>
        <blockquote>
          "All the Liabilities in this world are due to the inadequacies of the person involved"
        </blockquote>
      </div>

    </div>
  );
}

export default Sidebar;
