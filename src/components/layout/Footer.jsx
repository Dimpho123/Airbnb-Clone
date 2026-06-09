import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_section">
        <h3>Support</h3>
        <p>Help Center</p>
        <p>Safety Information</p>
        <p>Cancellation Options</p>
        <p>Report a Concern</p>
      </div>

      <div className="footer_section">
        <h3>Hosting</h3>
        <p>Become a Host</p>
        <p>Host Resources</p>
        <p>Community Forum</p>
        <p>Responsible Hosting</p>
      </div>

      <div className="footer_section">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Newsroom</p>
      </div>

      <div className="footer_bottom">
        <p>© 2026 Airbnb Clone by Dimpho. For educational purposes only.</p>
        <p>Privacy · Terms · Sitemap · Company Details</p>
      </div>
    </div>
  );
};

export default Footer;