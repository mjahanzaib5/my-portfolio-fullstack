import { useRef } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";

export default function About({ profile }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef);

  return (
    <section className="section section-about" id="about" ref={sectionRef}>
      <div className="container about-layout">
        <div className="about-copy">
          <span className="section-eyebrow" data-animate>About</span>
          <h2 className="section-title" data-animate>
            Full Stack Development — scalable backends met with intuitive frontends
          </h2>
          <p className="section-lead" data-animate>
            {profile.shortBio}
          </p>
        </div>
        <div className="about-panels">
          <div className="about-panel about-panel--accent" data-animate>
            <h3>Full Stack Expertise</h3>
            <p>
              I architect and build modern web applications using React, Node.js, PHP, and SQL/NoSQL databases.
              From database design to pixel-perfect frontends, I deliver complete, high-performance solutions.
            </p>
          </div>
          <div className="about-panel" data-animate>
            <h3>How I work</h3>
            <p>
              I bridge the gap between backend logic and frontend experience. My approach focuses on
              writing clean, maintainable code, designing efficient schemas, and creating responsive
              interfaces that users love.
            </p>
          </div>
          <div className="about-panel about-panel--list" data-animate>
            <h3>What you get</h3>
            <ul>
              <li>Custom full-stack solutions tailored to your business needs</li>
              <li>High-performing, secure APIs and database architectures</li>
              <li>Responsive, interactive UIs with a focus on UX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
