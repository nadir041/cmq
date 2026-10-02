import React, { memo } from 'react'
import styles from './WhyUsSection.module.css'
import whyUsImage from '../../assets/why-us.webp'
const WhyUsSection = memo(function WhyUsSection() {
  return (
    <section className={styles.section} aria-label="Why Choose Us">
      <div className={styles.container}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2 className={styles.heading}>Why Us For Medicare</h2>

          <div className={styles.body}>
            <p>Our licensed insurance agents can help discuss eligibility requirements and explain Medicare plan options, with no obligation to enroll.</p>
            <p>Our licensed insurance agents guide you through comparing Medicare plans and provide essential information to help you make an informed decision.</p>
            <p className={styles.boldLine}>We offer clear, side-by-side comparisons of Medicare plans so you can review options based on your individual needs and circumstances.</p>
            <p>Get the information you need to confidently review Medicare plan options available in your area.</p>
            <p className={styles.tagline}>Let us help you explore Medicare plan options with ease.</p>
          </div>
        </div>

        <div className={styles.imageCol}>
          <img
            src={whyUsImage}
            alt="Licensed Medicare insurance agents"
            className={styles.image}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className={styles.imagePlaceholder}>
            <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="80">
              <rect width="120" height="100" rx="8" fill="rgba(255,255,255,0.1)"/>
              <circle cx="42" cy="35" r="14" fill="rgba(255,255,255,0.25)"/>
              <circle cx="78" cy="35" r="14" fill="rgba(255,255,255,0.25)"/>
              <ellipse cx="60" cy="78" rx="36" ry="14" fill="rgba(255,255,255,0.2)"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
})

export default WhyUsSection
