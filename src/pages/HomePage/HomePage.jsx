// src/pages/HomePage/HomePage.jsx
import { MissionCard } from "../../components/MissionCard/MissionCard";
import { MISSIONS } from "../../utils/constants";
import backgroundCyber from "../../assets/images/Fonds/Image_de_base_apia.png";
import ordinateur from "../../assets/images/elements/Ordi_face.png";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="homepage">
      {/* SECTION HAUTE : Image de fond + Ordi central */}
      <header className="homepage__header">
        <div className="homepage__background-container">
          <img
            className="homepage__background-image"
            alt="Fond cyberpunk"
            src={backgroundCyber}
          />
        </div>
        <div className="homepage__fade-overlay"></div>
      </header>

      {/* SECTION MISSIONS : Les 4 cartes */}
      <section className="homepage__missions">
        <div className="homepage__missions-grid">
          {MISSIONS.map((card, index) => (
            <div key={card.id} className="homepage__mission-item">
              <MissionCard title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION BASSE : Fond noir + Second Ordi + Texte */}
      <section className="homepage__footer-info">
        <div className="homepage__footer-content">
          <div className="homepage__main-laptop">
            <img src={ordinateur} alt="Ordinateur APIA-IT" />
          </div>
          <div className="homepage__footer-text">
            <h2 className="homepage__footer-title">APIA-IT</h2>
            <p className="homepage__footer-subtitle">Association en</p>
            <p className="homepage__footer-large-text">
              Intelligence Artificielle
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
