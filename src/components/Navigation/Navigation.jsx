// src/components/Navigation/Navigation.jsx
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

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
    </nav>
  );
};
