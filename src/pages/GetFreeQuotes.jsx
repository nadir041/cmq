import React, { memo } from 'react'
import Form from '../components/Form/Form'
import styles from './GetFreeQuotes.module.css'

const GetFreeQuotes = memo(function GetFreeQuotes() {
  return (
    <main id="main-content">
      <section className={styles.section} aria-label="Get a Free Medicare Plan Review">
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.topLine}>Explore Medicare Advantage Plans today!</p>
            <h1 className={styles.heading}>Get a Plan Review from a licensed insurance agent</h1>
            <p className={styles.subheading}>
              Submit your Phone Number and We will reach out to you right away.
            </p>
          </div>

          <div className={styles.formWrapper}>
            <Form />
          </div>
        </div>
      </section>
    </main>
  )
})

export default GetFreeQuotes
