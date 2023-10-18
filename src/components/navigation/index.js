import React from "react";
import "./navigation.css";
function Navigation ()  {
  
    return (
      <header>
        <div className="header">
          <div className="headerLogo">FILMS</div>
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
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
};
export default Navigation;

