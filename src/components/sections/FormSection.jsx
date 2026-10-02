import React, { memo } from 'react'
import Form from '../Form/Form'
import styles from './FormSection.module.css'

const FormSection = memo(function FormSection({ id }) {
  return (
    <section className={styles.section} id={id} aria-label="Medicare Plan Review Request Form">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.topLine}>Explore Medicare Advantage Plans today!</p>
          <h2 className={styles.heading}>Get a Plan Review from a licensed insurance agent</h2>
          <p className={styles.subheading}>Submit your Phone Number and we will reach out to you right away.</p>
        </div>
        <div className={styles.formWrapper}>
          <Form />
        </div>
      </div>
    </section>
  )
})

export default FormSection
