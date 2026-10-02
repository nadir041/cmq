import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './IntroSection.module.css'
import patientImg from '../../assets/doctor-patient.webp'
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>
)

const benefits = [
  'No enrollment obligation',
  'Talk one-on-one with a Licensed Insurance Agent',
  'Discuss eligibility requirements',
  'Review Medicare Advantage plans in your area',
]

const IntroSection = memo(function IntroSection() {
  return (
    <section className={styles.section} aria-label="About our Medicare services">
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <img
            src={patientImg}
            alt="Healthcare professional assisting an elderly patient"
            className={styles.image}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className={styles.imagePlaceholder}>
            <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="80">
              <rect width="120" height="100" rx="8" fill="#e8f0eb"/>
              <circle cx="60" cy="35" r="18" fill="#b8d4c0"/>
              <ellipse cx="60" cy="78" rx="28" ry="16" fill="#b8d4c0"/>
            </svg>
          </div>
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            Whether you're new to Original Medicare, aging in, recently lost coverage, moved while enrolled in Parts A &amp; B, or qualify for a Special Enrollment Period, we're here to help
          </h2>

          <p className={styles.subLabel}>Medicare Advantage Plan Review at No Obligation</p>

          <ul className={styles.benefits}>
            {benefits.map((item) => (
              <li key={item} className={styles.benefitItem}>
                <span className={styles.checkIcon}><CheckIcon /></span>
                {item}
              </li>
            ))}
          </ul>

          <Link to="/get-free-quotes" className={styles.ctaBtn}>Get A Plan Review!</Link>
        </div>
      </div>
    </section>
  )
})

export default IntroSection
