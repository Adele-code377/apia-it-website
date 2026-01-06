// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import "./MainLayout.css";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
