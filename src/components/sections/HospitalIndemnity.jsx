import './HospitalIndemnity.css'
import hospitalImg from '../../assets/hospitality.jpeg' 

function HospitalIndemnity() {
  return (
    <section className="hospital-section">
      <div className="container hospital-wrapper">
        <div className="hospital-content">
          <span className="hospital-tag">
            Supplemental Coverage
          </span>

          <h2>Hospital Indemnity Plan</h2>

          <p>
            Needing to spend time in the hospital can disrupt your life and
            finances. And when you’re sick or injured enough to need hospital
            care for one night or more, the last thing you should have to worry
            about is how you’re going to pay for it. Hospital indemnity
            insurance can help.
          </p>

          <p>
            Hospital indemnity insurance is a type of supplemental health
            insurance plan that can help you pay for costs associated with a
            hospital stay. When you purchase hospital indemnity insurance
            through work, you’ll be able to use it if you are admitted to a
            hospital or intensive care unit for a covered sickness or injury.
          </p>
        </div>

        <div className="hospital-image">
          <img
            src={hospitalImg}
            alt="Nurse assisting a patient in a hospital room"
          />
        </div>
      </div>
    </section>
  )
}

export default HospitalIndemnity