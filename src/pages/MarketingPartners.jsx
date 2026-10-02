import React from 'react'
import styles from './MarketingPartners.module.css'

const MarketingPartners = () => {
    const partners = [
    
    ]

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Marketing Partners</h1>
        <ul>
          {partners.map((partner, index) => (
            <li key={index}>{partner}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default MarketingPartners;