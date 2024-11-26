import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"; // Header spezifisches CSS

const activeStyle = {
  color: "white",
  borderBottom: "3px solid #ffdd57",
};

export default function Header() {
  return (
      <header className="navbar">
        <nav className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img alt="Company Logo" src="/images/logo.png" />
          </Link>
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink activeStyle={activeStyle} to="/home" className="navbar-link">
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink activeStyle={activeStyle} to="/about" className="navbar-link">
                Über Mich
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink activeStyle={activeStyle} to="/komponente" className="navbar-link">
                PC-Komponenten
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
}
