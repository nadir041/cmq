import React from 'react'
import styles from './MarketingPartners.module.css'

const MarketingPartners = () => {
    const partners = [
      'National Senior Benefit Advisors',
      'Elite Agency',
      'YourWayMedicare',
      'Unlimited Investors Group',
      'Tranzact',
      'Thomas Art',
      'Spring Venture Group',
      'SelectQuote',
      'Px',
      'Plan B Group',
      'One Digital',
      'Morgan Fidelity',
      'Kauffman Insurance Group',
      'iHealth Plans',
      'GetMeHealthcare',
      'Family First Insurance',
      'Exact Benefits Group',
      'Enhance',
      'EHealth',
      'Datalot',
      'Connect One Health',
      'ClearMatch Medicare',
      'Clearlink',
      'Carida Insurance',
      'Assurance IQ Medicare',
      'Amerilife',
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