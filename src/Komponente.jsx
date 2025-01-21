import React from "react";
import { Link } from "react-router-dom"; // Link importieren
import "./Komponente.css"; // Das CSS für diese Komponente

import Image1 from './Bilder/CPU.jpg';
import Image2 from './Bilder/GPU.jpg';
import Image3 from './Bilder/RAM.jpg';
import Image4 from './Bilder/motherboard.jpg';
import Image5 from './Bilder/case.jpg';
import Image6 from './Bilder/kühler.jpg';
import Image7 from './Bilder/SSD.jpg';
import Image8 from './Bilder/PSU.jpg';

export default function Komponente() {
    const components = [
        {
            id: 1,
            title: "CPU",
            imageUrl: Image1,
        },
        {
            id: 2,
            title: "Grafikkarte",
            imageUrl: Image2,
        },
        {
            id: 3,
            title: "RAM",
            imageUrl: Image3,
        },
        {
            id: 4,
            title: "Motherboard",
            imageUrl: Image4,
        },
        {
            id: 5,
            title: "Gehäuse",
            imageUrl: Image5,
        },
        {
            id: 6,
            title: "Kühlungssystem",
            imageUrl: Image6,
        },
        {
            id: 7,
            title: "Speicherlaufwerk",
            imageUrl: Image7,
        },
        {
            id: 8,
            title: "Netzteil",
            imageUrl: Image8,
        },
    ];

    return (
        <div className="komponente-container">
            <h1>Unsere PC-Komponenten</h1>
            <div className="komponente-list">
                {components.map((component) => (
                    <div key={component.id} className="komponente-item">
                        {/* Link zu Detailseite */}
                        <Link to={`/komponente/${component.id}`} className="komponente-link">
                            <img src={component.imageUrl} alt={component.title} className="komponente-image" />
                            <h2>{component.title}</h2>
                            <p>{component.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
