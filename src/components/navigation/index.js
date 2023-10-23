import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
function Navigation ()  {
  
    return (
      <header>
        <div className="header">
         
          <Link to={`/`} class="headerLogo">FILMS</Link>
          <div className="navbar">
            <nav>
              <ul className="nav-cont">
                <li>
                <Link to={`/`} className="home">Home</Link>
                </li>

                <li>
                  <Link to={`/contact`} className="contact">Contact</Link>
                
          
                </li>
                <li>
                <Link to={`/about`} className="about">About</Link>
              
                </li>
                <li>
                <Link to={`/news`} className="news">News</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
};
export default Navigation;

