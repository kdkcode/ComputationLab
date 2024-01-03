import React from 'react';
import "./SeeMore.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SeeMore = () => {
  return (
    <div className="see-more-button-container">
      {/* Wrap the button with Link and specify the 'to' prop as the path you want to navigate to */}
      <Link to="/publication" className="see-more-button-link">
        <button className="see-more-button">SEE MORE</button>
      </Link>
    </div>
  )
}

export default SeeMore;
