import React from 'react';
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h2>About</h2>
      {/* Add contact information here */}
      <Link to={`/`} className="back">Back</Link>
    </div>
  );
}

export default About;