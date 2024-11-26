import React from "react";
import "./Komponente.css"; // Das CSS für diese Komponente

export default function Komponente() {
    // Beispiel-Komponenten für die PC-Website
    const components = [
        {
            id: 1,
            title: "CPU",
            description: "Die zentrale Verarbeitungseinheit ist das Herzstück eines PCs.",
            imageUrl: "/images/cpu.png", // Beispielbild (stelle sicher, dass du die entsprechenden Bilder bereitstellst)
        },
        {
            id: 2,
            title: "Grafikkarte",
            description: "Eine leistungsstarke GPU sorgt für eine optimale Grafikdarstellung.",
            imageUrl: "/images/gpu.png",
        },
        {
            id: 3,
            title: "RAM",
            description: "Arbeitsspeicher ist entscheidend für die Leistung eines PCs.",
            imageUrl: "/images/ram.png",
        },
        {
            id: 4,
            title: "Motherboard",
            description: "Das Motherboard verbindet alle Komponenten des Computers.",
            imageUrl: "/images/motherboard.png",
        },
    ];

    return (
        <div className="komponente-container">
            <h1>Unsere PC-Komponenten</h1>
            <div className="komponente-list">
                {components.map((component) => (
                    <div key={component.id} className="komponente-item">
                        <img src={component.imageUrl} alt={component.title} className="komponente-image" />
                        <h2>{component.title}</h2>
                        <p>{component.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
