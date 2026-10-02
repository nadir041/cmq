import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/header logo.webp"
const PhoneIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.5 11.5 0 003.61.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
  </svg>
);

const Header = memo(function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="CMQ Home">
  <div className={styles.logoWrapper}>
    <img src={logo} alt="CMQ Logo" className={styles.logoImage} />
    <span className={styles.logoText}>A Non-Government Entity</span>
  </div>
</Link>
        <div className={styles.contactWrapper}>
          <div className={styles.contactLabel}>
            Speak With A Licensed Insurance Agent
          </div>
          <div className={styles.contact}>
            <a href="tel:18883080532" className={styles.contactPhone}>
              <PhoneIcon />
              1-888-308-0532 | TTY:711
            </a>
            <div className={styles.contactHours}>
              Mon to Fri (09:00 am – 07:00 pm EST)
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
