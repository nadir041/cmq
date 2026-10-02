import React, { memo } from "react";
import styles from "./HeroSection.module.css";
import agentImage from "../../assets/agent.webp";
const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.5 11.5 0 003.61.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
  </svg>
);

const HeroSection = memo(function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Discover the Medicare
          <br />
          Plan That's Right for You
        </h1>

        <div className={styles.agentCard}>
          <div className={styles.agentAvatar} aria-hidden="true">
            <img
              src={agentImage}
              alt="Licensed insurance agent"
              className={styles.agentImage}
              loading="lazy"
            />
          </div>
          <h2 className={styles.agentLabel}>Talk to a licensed sales agent. </h2>
        </div>

        <p className={styles.agentDesc}>
          Have your questions answered and speak with a licensed insurance agent
          about Medicare plan options.
        </p>

        <a href="tel:18883080532" className={styles.phoneNumber}>
          <PhoneIcon />
          1-888-308-0532
        </a>
        <p className={styles.phoneHours}>
          TTY:711 Mon to Fri (09:00 am – 07:00 pm EST)
        </p>
      </div>
    </section>
  );
});

export default HeroSection;
