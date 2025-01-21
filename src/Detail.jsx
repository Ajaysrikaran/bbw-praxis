import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound"; // Sicherstellen, dass diese Seite vorhanden ist
import "./Detail.css";

import Image1 from './Bilder/CPU.jpg';
import Image2 from './Bilder/GPU.jpg';
import Image3 from './Bilder/RAM.jpg';
import Image4 from './Bilder/motherboard.jpg';
import Image5 from './Bilder/case.jpg';
import Image6 from './Bilder/kühler.jpg';
import Image7 from './Bilder/SSD.jpg';
import Image8 from './Bilder/PSU.jpg';

export default function Detail() {
    const { id } = useParams();

    const components = [
        {
            id: 1,
            name: "CPU",
            description: (
                <div>
                    <strong>Bedeutung:</strong> Die CPU ist das „Gehirn“ eines Computers. Sie führt Berechnungen und Befehle aus, die von Software und Programmen übermittelt werden. Die Leistung der CPU bestimmt massgeblich, wie schnell und effizient der Computer arbeiten kann.<br />
                    <br/>
                    <strong>Anwendung:</strong> Die CPU wird für praktisch alle Rechenoperationen im Computer verwendet, von der Ausführung von Programmen bis hin zur Steuerung von Hardware. Eine leistungsstärkere CPU sorgt für eine bessere Leistung bei komplexen Aufgaben wie Videobearbeitung, Gaming oder wissenschaftlichen Berechnungen.
                </div>
            ),
            image: Image1,
        },
        {
            id: 2,
            name: "Grafikkarte (GPU)",
            description: (
                <div>
                    <strong>Bedeutung:</strong> Die GPU ist speziell für die Berechnung von Grafik und visuellen Effekten zuständig. Sie übernimmt die Darstellung von Bildern, Texturen und Animationen, die auf dem Bildschirm erscheinen.<br />
                    <br/>
                    <strong>Anwendung:</strong> Eine starke GPU ist besonders wichtig für grafisch intensive Anwendungen wie 3D-Spiele, Videoschnitt oder Design-Software. Moderne GPUs sind auch in der Lage, KI- und maschinelles Lernen zu beschleunigen.
                </div>
            ),
            image: Image2,
        },
        {
            id: 3,
            name: "RAM",
            description: (
                <div>
                    <strong>Bedeutung:</strong> RAM ist der Arbeitsspeicher eines Computers. Er speichert temporär Daten und Programme, die der Prozessor schnell benötigt. Je mehr RAM ein Computer hat, desto mehr Daten kann er gleichzeitig verarbeiten.<br />
                    <br/>
                    <strong>Anwendung:</strong> RAM ist entscheidend für die Geschwindigkeit und Multitasking-Fähigkeit eines Computers. Mehr RAM ermöglicht es, mehrere Programme gleichzeitig auszuführen, ohne dass der Computer langsamer wird. Bei grafikintensiven Anwendungen oder Software, die grosse Datenmengen benötigt, wird viel RAM gebraucht.
                </div>
            ),
            image: Image3,
        },
        {
            id: 4,
            name: "Motherboard",
            description: (
                <div>
                    <strong>Bedeutung:</strong> Das Motherboard ist die Hauptplatine eines Computers, auf der alle wichtigen Komponenten miteinander verbunden sind. Es ermöglicht die Kommunikation zwischen der CPU, GPU, RAM und anderen Hardwareteilen.<br />
                    <br/>
                    <strong>Anwendung:</strong> Das Motherboard spielt eine entscheidende Rolle bei der Verbindung und der Stromversorgung der anderen Komponenten. Es stellt sicher, dass die Daten zwischen den verschiedenen Teilen des Computers korrekt übertragen werden.
                </div>
            ),
            image: Image4,
        },
        {
            id: 5,
            name: "Gehäuse",
            description: (
                <div>
                    <strong>Bedeutung:</strong> Das Gehäuse schützt die internen Komponenten des Computers und sorgt für eine gute Belüftung, um Überhitzung zu vermeiden.<br />
                    <br/>
                    <strong>Anwendung:</strong> Das Gehäuse wird ausgewählt, um sicherzustellen, dass alle Komponenten sicher untergebracht sind und eine ausreichende Kühlung erhalten. Es bietet auch Platz für Erweiterungen und ist oft entscheidend für die Optik des Computers (z. B. bei Gaming-PCs).
                </div>
            ),
            image: Image5,
        },
        {
            id: 6,
            name: "Kühlungssystem",
            description: (
                <div>
                    <strong>Bedeutung:</strong> Ein Kühlungssystem sorgt dafür, dass die Temperatur im Inneren des PCs auf einem sicheren Niveau bleibt. Zu hohe Temperaturen können die Lebensdauer der Komponenten verringern oder zu Leistungsproblemen führen.<br />
                    <br/>
                    <strong>Anwendung:</strong> Kühlungssysteme sind besonders wichtig bei leistungsstarken CPUs und GPUs, die bei intensiver Nutzung viel Wärme erzeugen. Luftkühlung und Flüssigkeitskühlung sind gängige Methoden zur Kühlung von PCs.
                </div>
            ),
            image: Image6,
        },
        {
            id: 7,
            name: "Speicherlaufwerk (SSD)",
            description: (
                <div>
                    <strong>Bedeutung:</strong> Eine SSD ist ein schnellerer Speichertyp im Vergleich zur traditionellen Festplatte (HDD). Sie speichert Daten auf Flash-Speicherchips, wodurch Zugriffszeiten und Lese-/Schreibgeschwindigkeiten deutlich schneller sind.<br />
                    <br/>
                    <strong>Anwendung:</strong> SSDs verbessern die Leistung eines PCs, indem sie schnellere Boot- und Ladezeiten ermöglichen. Sie sind besonders nützlich für den schnellen Zugriff auf häufig verwendete Daten und Programme. Für höhere Speicherkapazität können SSDs mit HDDs kombiniert werden.
                </div>
            ),
            image: Image7,
        },
        {
            id: 8,
            name: "Netzteil (PSU)",
            description: (
                <div>
                    <strong>Bedeutung:</strong> Das Netzteil wandelt die Wechselstromversorgung (AC) aus der Steckdose in Gleichstrom (DC) um und versorgt so alle Komponenten des PCs mit Strom.<br />
                    <br/>
                    <strong>Anwendung:</strong> Das Netzteil muss ausreichend Leistung liefern, um alle installierten Komponenten zu versorgen, einschliesslich CPU, GPU, Speicherlaufwerke und Kühlungssysteme. Es ist entscheidend, dass das Netzteil eine stabile und effiziente Stromversorgung gewährleistet.
                </div>
            ),
            image: Image8,
        },
    ];

    const component = components.find(c => c.id === parseInt(id));

    if (!component) return <PageNotFound />;

    return (
        <div id="detail" className="detail-container">
            <h1 className="detail-title">{component.name}</h1>
            <img src={component.image} alt={component.name} className="detail-image" />
            <p className="detail-description">{component.description}</p>
        </div>
    );
}
