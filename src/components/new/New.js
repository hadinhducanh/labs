import React from 'react';
import { Link } from "react-router-dom";
function New() {
  return (
    <div>
      <h2>News</h2>
      {/* Add contact information here */}
      <Link to={`/`} className="back">Back</Link>
    </div>
  );
}

export default New;