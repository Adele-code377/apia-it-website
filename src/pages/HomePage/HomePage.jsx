// src/pages/HomePage/HomePage.jsx
import { MissionCard } from "../../components/MissionCard/MissionCard";
import { MISSIONS } from "../../utils/constants";
import logoApiaIT from "../../assets/images/logo-apia-it.png";
import backgroundCyber from "../../assets/images/background-cyber.png";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__background">
        <img
          className="homepage__background-image"
          alt="Fond cyberpunk"
          src={backgroundCyber}
        />
        <div className="homepage__background-overlay" />
      </div>

      <div className="homepage__content">
        <div className="homepage__hero">
          <div className="homepage__logo-container">
            <img
              src={logoApiaIT}
              alt="Logo APIA-IT"
              className="homepage__logo animate-scale-in"
            />
          </div>

          <section className="homepage__about animate-fade-in-up delay-200">
            <h1 className="sr-only">À propos d'APIA-IT</h1>
            <p className="homepage__about-text">
              APIA-IT est une association engagée dans la sensibilisation à
              l'information, au numérique et à l'intelligence artificielle.
              <br />
              <br />
              À une époque où le numérique et l'IA occupent une place centrale
              dans nos vies, notre objectif est d'aider chacun à comprendre,
              analyser et agir de manière éclairée.
              <br />
              <br />
              Nous concevons et animons des ateliers pédagogiques, des jeux
              interactifs et des escape games éducatifs, accessibles à tous les
              publics.
              <br />
              <br />
              Nous intervenons directement dans les écoles, collèges, lycées,
              établissements d'enseignement supérieur, mais aussi auprès des
              associations, collectivités, structures jeunesse et organisations
              professionnelles.
              <br />
              <br />
              Notre approche ludique et participative permet d'aborder des
              sujets complexes de façon concrète et engageante.
              <br />
              <br />
              Parce qu'un citoyen informé est un citoyen plus libre, APIA-IT
              œuvre pour un numérique plus responsable, éthique et inclusif.
            </p>
          </section>
        </div>

        <section className="homepage__missions">
          <h2 className="sr-only">Nos missions</h2>

          <div className="homepage__missions-grid">
            {MISSIONS.map((card, index) => (
              <div
                key={card.id}
                className={`animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <MissionCard
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
