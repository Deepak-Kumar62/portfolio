import React, { useState } from "react";
import "./header.css";

function Header() {
  // Toggle Menu
  const [toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Deepak
        </a>

        <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
             <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => {
              showMenu(!toggle);
            }}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => {
            showMenu(!toggle);
          }}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
