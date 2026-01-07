// src/components/Footer/Footer.jsx
import { Link } from "react-router-dom";
import { ASSOCIATION_INFO, SOCIAL_LINKS } from "../../utils/constants";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">{ASSOCIATION_INFO.name}</h3>
          <p className="footer__description">
            Association engagée dans la sensibilisation au numérique et à
            l'intelligence artificielle.
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Navigation</h4>
          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/projets" className="footer__link">
                Projets Réaliser
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Contact</h4>
          <ul className="footer__contact">
            <li>
              <a
                href={`mailto:${ASSOCIATION_INFO.email}`}
                className="footer__link"
              >
                {ASSOCIATION_INFO.email}
              </a>
            </li>
            <li>
              <p className="footer__description">
                {ASSOCIATION_INFO.address.street}
              </p>
            </li>
            <li>
              <p className="footer__description">
                {ASSOCIATION_INFO.address.city}{" "}
                {ASSOCIATION_INFO.address.zipCode}
              </p>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Si vous voulez nous rejoindre</h4>
          <div className="footer__socials">
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              Discord
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} {ASSOCIATION_INFO.name}
        </p>
      </div>
    </footer>
  );
};
