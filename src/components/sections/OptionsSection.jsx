import React, { memo } from 'react'
import styles from './OptionsSection.module.css'

const options = [
  {
    title: 'Original Medicare (PARTS A + B)',
    body: 'This is the basic Medicare coverage provided by the federal government. Part A covers hospital insurance, and Part B covers medical insurance.',
  },
  {
    title: 'Original Medicare + Drug Coverage (Parts A + B + D)',
    body: 'You can add Part D for prescription drug coverage through private insurance companies, which helps pay for your medications.',
  },
  {
    title: 'Medicare Advantage (Part C)',
    body: 'Medicare Advantage plans are offered by private insurance companies and combine Parts A, B, and often D into one plan.',
  },
]

const OptionsSection = memo(function OptionsSection() {
  return (
    <section className={styles.section} aria-label="Understanding Your Medicare Options">
      <div className={styles.container}>
        <h2 className={styles.heading}>Understanding Your Medicare Options</h2>
        <div className={styles.grid}>
          {options.map((opt, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardAccent} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{opt.title}</h3>
              <p className={styles.cardBody}>{opt.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})

export default OptionsSection
