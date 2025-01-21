import React from "react";
import "./About.css";
import Image2 from './Bilder/Setup.jpg';
import ProjectVideo from './Bilder/video.mp4';

export default function About() {
    return (
        <div className="about-container">
            <h1>Über Mich und Mein Projekt</h1>
            <p>
                Ich bin im 2. Jahr der Informatikmittelschule (IMS). Dieses Projekt ist Teil meiner Schule und
                hilft mir dabei, mein Wissen in der Praxis zu nutzen.
            </p>
            <h2>Mein Arbeitsplatz</h2>
            <p>
                Ich bin im 2. Jahr der Informatikmittelschule (IMS). Dieses Projekt ist Teil meiner Schule und hilft mir dabei, mein Wissen in der Praxis zu nutzen.

                Mein Arbeitsplatz
                Hier siehst du mein PC-Setup, an dem ich meine Projekte umsetze, programmiere und lerne. Das Setup habe ich so gestaltet,
                dass ich effizient arbeiten und mich gleichzeitig wohlfühlen kann. Es ist nicht nur ideal für Schulprojekte und das
                Lernen, sondern auch hervorragend geeignet, um in meiner Freizeit zu spielen.
            </p>

            <div className="image-gallery">
                <img src={Image2} alt="Mein PC-Setup" className="setup-image" />
            </div>
            {/* Video */}
            <div className="video-container">
                <video className="setup-video" controls>
                    <source src={ProjectVideo} type="video/mp4" />
                    Dein Browser unterstützt das Video-Element nicht.
                </video>
            </div>
        </div>
    );
}
