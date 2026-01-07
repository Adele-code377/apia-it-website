// src/components/Navigation/Navigation.jsx
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import logoApia from "../../assets/images/logo/LogoApia_blanc.png";

const NAVIGATION_ITEMS = [
  { id: 1, label: "Accueil", path: "/" },
  { id: 2, label: "Projets réalisés", path: "/projets" },
  { id: 3, label: "Contacts", path: "/contact" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav
      className="navigation"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="navigation__container">
        {/* Cadre du Logo (Gauche) */}
        <div className="navigation__left">
          <Link to="/" className="navigation__logo-frame">
            <img
              src={logoApia}
              alt="Logo APIA"
              className="navigation__logo-img"
            />
          </Link>
        </div>

        {/* Menu (Centre) */}
        <div className="navigation__center">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`navigation__item ${
                  isActive ? "navigation__item--active" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="navigation__label">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Spacer (Droite) pour équilibrer le centrage */}
        <div className="navigation__right"></div>
      </div>
    </nav>
  );
};
