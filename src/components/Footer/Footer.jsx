import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
  </svg>
)

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      {/* Disclosures */}
      <div className={styles.disclosures}>
        <div className={styles.container}>
          <h2 className={styles.disclosuresTitle}>Important Disclosures</h2>
          <p>We do not offer every plan available in your area. Currently we represent 6 organizations which offer 30  products in your area (contracting varies by state). Please contact{' '}
            <a href="https://medicare.gov" target="_blank" rel="noopener noreferrer" className={styles.link}>Medicare.gov</a>{' '}
            or 1-800-MEDICARE to get information on all of your options.
          </p>
          <p>Participating sales agencies represent Medicare Advantage HMO, PPO and PFFS organizations and stand-alone PDP prescription drug plans that are contracted with Medicare. Enrollment depends on the plan's contract renewal.</p>
          <p>Not all plans offer all of these benefits. Benefits may vary by carrier and location. Limitations and exclusions may apply</p>
          <p>[Enrollment in a plan may be limited to certain times of the year unless you qualify for a special enrollment period or you are in your Medicare Initial Enrollment Period.]</p>
          
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Contact Us</h3>
              <ul className={styles.contactList}>
                <li><span className={styles.contactLabel}>Phone No:</span> <a href="tel:18883080532" className={styles.contactLink}>+1 (888)-308-0532</a></li>
                <li><span className={styles.contactLabel}>Email:</span> <a href="mailto:info@comparemedquotes.com" className={styles.contactLink}>info@comparemedquotes.com</a></li>
                <li><span className={styles.contactLabel}>Address:</span> 7901 4th St, St #23592, Saint Petersburg, FL, United States, 33702</li>
              </ul>
            </div>

            {/* CTA */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Want help shopping for your plan?</h3>
              <p className={styles.ctaText}>A licensed insurance agent is just a phone call away.</p>
              <a href="tel:18883080532" className={styles.ctaPhone}>1-888-308-0532</a>
              <p className={styles.ctaHours}>TTY:711 Mon to Fri (09:00 am – 07:00 pm EST)</p>
              <div className={styles.secureWrapper}>
                <div className={styles.secureBadge}>
                  <LockIcon />
                  <span>SECURE<br/>WEBSITE</span>
                </div>
              </div>
            </div>

            {/* Brand */}
            <div className={styles.col}>
              <div className={styles.brandBlock}>
                <div className={styles.brandLogo}>
                  {/* <div className={styles.brandMark}>
                    <span className={styles.brandC}>C</span>
                  </div> */}
                  {/* <span className={styles.brandName}>CMQ</span> */}
                </div>
                <p className={styles.brandHours}>Monday to Friday 9:00 AM to 07:00 pm EST</p>
                {/* <p className={styles.brandCode}>MULTIPLAN_CBCMQ5GleAds2026_C</p> */}
                <p className={styles.brandCode}>MULTIPLAN_LS_CMQ_2027_C</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>© {currentYear} comparemedquotes | All Rights reserved</p>
          <nav className={styles.bottomNav} aria-label="Footer navigation">
            <Link to="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
            <Link to="/terms-conditions" className={styles.bottomLink}>Terms &amp; Conditions</Link>
            <Link to="/do-not-sell" className={styles.bottomLink}>Do Not Sell My Information</Link>
            <Link to="/dnc-policy" className={styles.bottomLink}>DNC Policy</Link>
            <Link to="/marketing-partners" className={styles.bottomLink}>Marketing Partners</Link>
          </nav>
        </div>
 {/* <p className={styles.owner}>
      This website is owned and operated by Lead Source Co
    </p>       */}
    </div>
    </footer>
  )
})



export default Footer
