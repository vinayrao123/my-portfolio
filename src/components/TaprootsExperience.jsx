import React from 'react';
import './TaprootsExperience.css';

function TaprootsExperience() {
  return (
    <div className="taproots-experience">
      <h1>Taproots Experience</h1>
      <div className="tiles-container">
        <div className="tile">
          <h2>Athlete Evaluation Screenshots</h2>
          <p>Coaches could set the current level for an athlete and perform periodic evaluations. The tool facilitated a simple interface to evaluate an athlete and a simple visual interface for the athletes to visualise the data.</p>
          <a 
            href="https://drive.google.com/drive/folders/1admq33ZuQuj7YAJVA21SYeg2WGemTH5Y?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button"
          >
            View Screenshots
          </a>
        </div>

        <div className="tile">
          <h2>Product Demos</h2>
          <div className="demo-links">
            <div className="demo-item">
              <h3>FanCommunity Chat Platform</h3>
              <p>AI aided chat to make sports centric chat relevant and interesting!</p>
              <a 
                href="https://youtu.be/hVxEu_Di5nY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button"
              >
                Watch Demo
              </a>
            </div>
            <div className="demo-item">
              <h3>TapView</h3>
              <p>Personalized real-time sports moments just a QR scan away!</p>
              <a 
                href="https://youtu.be/oiJMxtJAFlM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>

        <div className="tile">
          <h2>Certifications</h2>
          <div className="certificate-item">
            <h3>Course of Making India a Sporting Nation</h3>
            <p>A certification program focused on sports development and nation building through sports.</p>
            <a 
              href="https://drive.google.com/file/d/1acmvjGN9Oisa80S47LssLRfw0SPJOCfe/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaprootsExperience; 