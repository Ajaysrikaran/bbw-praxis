import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Falls du spezifisches CSS verwenden möchtest

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-navigation">
                <h3>Navigation</h3>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/komponente">PC-Komponenten</Link>
                    </li>
                    <li>
                        <Link to="/about">Über Mich</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Kontakt</h3>
                <ul>
                    <li>
                        <a href="https://github.com/Ajaysrikaran" target="_blank" rel="noopener noreferrer">
                            GitHub: Ajaysrikaran
                        </a>
                    </li>
                    <li>Telefon: +41 78 307 07 10</li>
                    <li>Email: ajay.srikaran@icloud.com</li>
                </ul>
            </div>
            <div className="footer-info">
                <p>&copy; BBW 2025</p>
            </div>
        </footer>
    );
}
