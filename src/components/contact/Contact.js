import React from 'react';
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <h2>Contact Information</h2>
      {/* Add contact information here */}
      <Link to={`/`} className="back">Back</Link>
    </div>
  );
}

export default Contact;