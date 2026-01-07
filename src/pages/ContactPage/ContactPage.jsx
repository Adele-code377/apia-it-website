// src/pages/ContactPage/ContactPage.jsx
import React from "react";
import "./ContactPage.css";

// Import des éléments fixes
import logoAssos from "../../assets/images/Avatar/Apia.png";
import AdeleImage from "../../assets/images/Avatar/Adele.png";
import CassieImage from "../../assets/images/Avatar/Cassie.png";
import LucieImage from "../../assets/images/Avatar/Lucie.png";
import SarahImage from "../../assets/images/Avatar/Sarah.png";
import TristanImage from "../../assets/images/Avatar/Tristan.png";
import ValentinaImage from "../../assets/images/Avatar/Valentina.png";
import WijdaneImage from "../../assets/images/Avatar/Wijdane.png";
import instaIcon from "../../assets/images/icons/Instagram_logo.png";
import linkedinIcon from "../../assets/images/icons/LinkedIn_logo.png";

const TEAM_MEMBERS = [
  {
    name: "Wijdane Chaigneau",
    image: WijdaneImage,
    role: "Presidente",
    linkedin: "https://linkedin.com/in/...",
  },
  {
    name: "Adele Privat",
    image: AdeleImage,
    role: "Vice-presidente",
    linkedin: "https://linkedin.com/in/...",
  },
  {
    name: "Cassie Marteau",
    image: CassieImage,
    role: "Responsable projet",
    linkedin: "https://linkedin.com/in/...",
  },
  {
    name: "Lucie Crest",
    image: LucieImage,
    role: "Secretaire",
    linkedin: "https://linkedin.com/in/...",
  },
  {
    name: "Tristan Janet",
    image: TristanImage,
    role: "Tresorier",
    linkedin: "https://linkedin.com/in/...",
  },
  {
    name: "Sarah Delbos",
    image: SarahImage,
    role: "Responsable communication",
    linkedin: "https://linkedin.com/in/...",
  },
  {
    name: "Valentina Bardelang",
    image: ValentinaImage,
    role: "Vice responsable communication",
    linkedin: "https://linkedin.com/in/...",
  },
];

export const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Conteneur pour le fond animé (géré via CSS ::before/::after) */}
      <div className="animated-bg">
        <div className="stars"></div>
      </div>

      <div className="contact-grid">
        {TEAM_MEMBERS.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-avatar-container">
              <img
                src={member.image}
                alt={member.name}
                className="member-avatar"
                onError={(e) => {
                  e.target.src = logoAssos;
                  e.target.onerror = null;
                }}
              />
            </div>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="member-button"
            >
              {member.name}
            </a>
            <p className="member-role">{member.role}</p>
          </div>
        ))}

        {/* Bloc Association */}
        <div className="member-card association-card">
          <div className="member-avatar-container assoc-logo-container">
            <img
              src={logoAssos}
              alt="APIA"
              className="member-avatar assoc-logo"
            />
          </div>
          <div className="social-footer">
            <a
              href="https://instagram.com/apia-it"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instaIcon} alt="Instagram" className="social-icon" />
            </a>
            <div className="member-button assoc-label">Apia-it</div>
            <a
              href="https://linkedin.com/company/apia-it"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
          <p className="member-role">L'association</p>
        </div>
      </div>
    </div>
  );
};
