import React from 'react'
import styles from './DNCPolicy.module.css'

const DNCPolicy = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Do Not Call (DNC) Policy</h1>
        <p>
          If you would like to opt out from our list, please use the Opt-Out option provided on this page.
        </p>
        <p>
          If a consumer requests a copy of our "Do Not Call" policy, CompareMedQuotes will provide a copy via U.S. mail upon request.
        </p>
        <p>
          Consumers may request, by telephone or in writing, that CompareMedQuotes stop calling them and place their name on our internal "Do Not Call" list. While we may request your name, address, and telephone number, we will honor your request even if you provide only your telephone number.
        </p>
        <p>
          You have the right to request that calls stop and to be placed on our "Do Not Call" list even if you are an existing customer.
        </p>
        <p>
          Once we receive your request, your telephone number will be added to our "Do Not Call" list within two business days. In some cases, it may take up to two business days for your number to be removed from other company-wide calling lists. Your request will remain active for a minimum of five years.
        </p>
        <p>
          If you move, change your telephone number, or add an additional telephone number, you must notify us of the new number in order for us to prevent calls to that number.
        </p>
        <p>
          CompareMedQuotes will not share the information you provide with anyone outside of affiliated companies or subsidiaries without your prior written consent.
        </p>

        <h2>Telemarketing Practices</h2>
        <p>
          CompareMedQuotes may perform telemarketing services for other companies. In such cases, we will forward our updated "Do Not Call" lists to those companies on a periodic basis, unless the client specifically requests otherwise or declines to accept such updates.
        </p>
        <p>
          All employees who engage in outbound telephone solicitation are trained on this policy and informed of these procedures before they are permitted to place calls. Managers, supervisors, or trainers review this policy with employees on a regular basis.
        </p>
        <p>
          If a consumer informs us that they received a call after requesting placement on our "Do Not Call" list, we will apologize for the inconvenience and initiate an internal review. A manager or supervisor will personally confirm that the telephone number is listed on our "Do Not Call" registry. Upon request, we will mail written confirmation that the number is on the list.
        </p>

        <h2>National Do Not Call Registry</h2>
        <p>
          The Federal Trade Commission provides a free service that allows consumers to register their residential phone numbers on the National Do Not Call Registry. This service helps reduce telemarketing calls.
        </p>
        <p>
          Consumers may add their residential phone number by calling 888-382-1222 or by visiting www.donotcall.gov. It may take several weeks for call volume to decrease after registration.
        </p>

        <h2>Policy Review</h2>
        <p>
          The methods and procedures outlined in this Do Not Call policy are reviewed quarterly by the Director of Compliance to ensure ongoing adherence and effectiveness.
        </p>
      </div>
    </main>
  )
}

export default DNCPolicy;