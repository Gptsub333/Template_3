import { Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";
import data from "../data/data.json";

function Footer() {
  const { brand, pages, contact, support, legal, social } = data.footer;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">⊞</div>
              <span className="logo-text">{brand.logoText}</span>
            </div>
            <p className="brand-tagline">{brand.tagline}</p>
          </div>
          <div className="footer-section">
            <h3>Pages</h3>
            <ul>
              {pages.map((page, index) => (
                <li key={index}>
                  <a href={page.link}>{page.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>
                <Phone className="footer-icon" size={16} />
                {contact.phone}
              </li>
              <li>
                <Mail className="footer-icon" size={16} />
                {contact.email}
              </li>
              <li>
                <MapPin className="footer-icon" size={16} />
                {contact.address}
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              {support.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© Alle rechten voorbehouden</span>
            <div className="legal-links">
              {legal.map((item, index) => (
                <a key={index} href={item.link}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="social-links">
            {social.map((socialItem, index) => (
              <a key={index} href={socialItem.link} className="social-link">
                <img src={socialItem.icon} alt={socialItem.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
