// src/pages/ContactPage/ContactPage.jsx
import { useState } from "react";
import { ASSOCIATION_INFO, SOCIAL_LINKS } from "../../utils/constants";
import "./ContactPage.css";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-page__content">
        <div className="contact-page__header animate-fade-in">
          <h1 className="contact-page__title">Contactez-nous</h1>
          <p className="contact-page__subtitle">
            Vous avez un projet ? Une question ? N'hésitez pas !
          </p>
        </div>

        <div className="contact-page__grid">
          <div className="contact-page__form-container animate-fade-in-up delay-200">
            {isSubmitted ? (
              <div className="contact-page__success">
                <div className="contact-page__success-icon">✓</div>
                <h3>Message envoyé !</h3>
                <p>Nous vous répondrons bientôt.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                  />
                </div>
                <button type="submit" className="contact-form__submit">
                  Envoyer
                </button>
              </form>
            )}
          </div>

          <div className="contact-page__info animate-fade-in-up delay-300">
            <div className="contact-info">
              <h2>Nos coordonnées</h2>
              <div className="contact-info__item">
                <div>📧</div>
                <a href={`mailto:${ASSOCIATION_INFO.email}`}>
                  {ASSOCIATION_INFO.email}
                </a>
              </div>
              <div className="contact-info__item">
                <div>📞</div>
                <a href={`tel:${ASSOCIATION_INFO.phone}`}>
                  {ASSOCIATION_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
