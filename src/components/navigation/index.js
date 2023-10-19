import React from "react";
import "./navigation.css";
function Navigation ()  {
  
    return (
      <header>
        <div className="header">
          <a class="headerLogo" href="/">FILMS</a>
          <div className="navbar">
            <nav>
              <ul className="nav-cont">
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>

                <li>
                  <a className="contact" href="/contact">
                  Contact
                  </a>
                </li>
                <li>
                  <a className="about" href="/about">
                  About
                  </a>
                </li>
                <li>
                  <a className="news" href="/news">
                  News
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
};
export default Navigation;

