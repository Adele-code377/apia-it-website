// src/pages/ProjectsPage/ProjectsPage.jsx
import "./ProjectsPage.css";

export const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="projects-page__content">
        <h1 className="projects-page__title animate-fade-in">
          Nos Projets Réalisés
        </h1>
        <p className="projects-page__subtitle animate-fade-in-up delay-200">
          Découvrez nos interventions et ateliers
        </p>

        <div className="projects-page__placeholder">
          <p>Contenu à venir...</p>
        </div>
      </div>
    </div>
  );
};
