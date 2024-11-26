import React from "react";
import "./Home.css"; // Optionales CSS für das Styling der Home-Seite

export default function Home() {
    return (
        <div className="home-container">
            <h1>Willkommen bei meiner PC-Komponenten Website!</h1>
            <p>
                Auf dieser Website dreht sich alles um PC-Komponenten. Ich zeige dir, wie die verschiedenen Teile eines PCs zusammenarbeiten, was sie auszeichnet, und warum sie wichtig sind.
                Wenn du mehr über Prozessoren, Grafikkarten, Arbeitsspeicher und mehr erfahren möchtest, bist du hier genau richtig.
            </p>

            {/* Animation oder Bild in der Mitte */}
            <div className="animation-container">
                <img src="/images/animated-pc.gif" alt="Beweglicher PC" className="home-animation" />
            </div>

            <p>
                Entdecke die Welt der PC-Hardware und lerne, was einen leistungsstarken Computer ausmacht. Ich habe die wichtigsten Komponenten erklärt und detaillierte Beschreibungen sowie Bilder eingefügt, damit du besser verstehst, wie sie funktionieren.
            </p>

            <div className="cta-buttons">
                <a href="/komponente" className="btn btn-primary">PC-Komponenten entdecken</a>
                <a href="/about" className="btn btn-secondary">Über Mich</a> {/* Den roten Knopf angepasst */}
            </div>
        </div>
    );
}
