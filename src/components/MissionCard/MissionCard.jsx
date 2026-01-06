// src/components/MissionCard/MissionCard.jsx
import "./MissionCard.css";

export const MissionCard = ({ title, description }) => {
  return (
    <article className="mission-card">
      <h3 className="mission-card__title">{title}</h3>
      <p className="mission-card__description">{description}</p>
    </article>
  );
};
