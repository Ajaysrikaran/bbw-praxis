import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"; // Header spezifisches CSS
import Foto from './Bilder/img.png';

export default function Header() {
  return (
      <header className="navbar">
        <nav className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img alt="Company Logo" src={Foto} />
          </Link>
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "navbar-link active-link" : "navbar-link")}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                  to="/komponente"
                  className={({ isActive }) => (isActive ? "navbar-link active-link" : "navbar-link")}
              >
                PC-Komponenten
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "navbar-link active-link" : "navbar-link")}
              >
                Über Mich
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
}
