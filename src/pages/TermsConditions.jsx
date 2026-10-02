import React from 'react';
import styles from './TermsConditions.module.css';

const TermsConditions = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Terms and Conditions</h1>
        <p>Last Updated: 09/01/2026</p>
        <ol>
          <li>
            <strong>Acceptance of Terms</strong><br />
            By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use this website.
          </li>
          <li>
            <strong>Use of Website</strong><br />
            This website is provided for informational purposes only. You agree to use the site lawfully and not engage in any activity that could damage, disable, or impair the website or interfere with other users.<br /><br />
            Unauthorized use of this website may give rise to a claim for damages and or be a criminal offense.
          </li>
          <li>
            <strong>No Professional or Government Affiliation</strong><br />
            This website is not connected with or endorsed by any government entity. Information provided on this site should not be considered legal, medical, or financial advice.<br /><br />
            Plan availability, benefits, and eligibility depend on carrier contracts and may vary by location and time of year.
          </li>
          <li>
            <strong>User Submissions</strong><br />
            Any information you voluntarily submit through forms, phone calls, or other contact methods must be accurate and truthful to the best of your knowledge.<br /><br />
            You agree not to submit false, misleading, or incomplete information.
          </li>
          <li>
            <strong>Third-Party Services and Links</strong><br />
            This website may include links to third-party websites or services. We do not control and are not responsible for the content, availability, or practices of any third-party sites.<br /><br />
            Accessing third-party links is done at your own risk.
          </li>
          <li>
            <strong>Limitation of Liability</strong><br />
            comparemedquotes, its affiliates, partners, and representatives shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:<br /><br />
            Use or inability to use the website<br />
            Errors or omissions in content<br />
            Reliance on information provided on the site<br /><br />
            Use of this website is at your own risk.
          </li>
          <li>
            <strong>Intellectual Property</strong><br />
            All content on this website, including text, graphics, logos, layout, and design, is the property of comparemedquotes unless otherwise stated.<br /><br />
            You may not copy, reproduce, distribute, or exploit any content without prior written permission.
          </li>
          <li>
            <strong>Service Availability</strong><br />
            We do not guarantee that the website will always be available or uninterrupted. We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.
          </li>
          <li>
            <strong>Changes to Terms</strong><br />
            We reserve the right to update or modify these Terms and Conditions at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
          </li>
          <li>
            <strong>Governing Law</strong><br />
            These Terms and Conditions are governed by the laws of the Commonwealth of Pennsylvania, United States of America.<br /><br />
            Any legal action related to this website shall be brought exclusively in the state or federal courts located in Montgomery County, Pennsylvania.
          </li>
          <li>
            <strong>Contact Information</strong><br />
            If you have any questions regarding these Terms and Conditions, please contact us through the contact information provided on this website.
          </li>
        </ol>
      </div>
    </main>
  );
};

export default TermsConditions;