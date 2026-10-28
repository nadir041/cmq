import React, { useState, useCallback, memo, useEffect } from "react";
import styles from "./Form.module.css";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const CONSENT_TEXT = `By clicking "Submit" I provide my electronic signature to authorize a representative associated with Compare Med Quotes to contact me at the number and address provided with insurance quotes, products and services including Medicare Supplement, Medicare Advantage, Prescription Drug insurance plans, and other health-related services, for marketing purposes, or to obtain additional information for such purposes using via live, automated dialing system telephone call, text, or Email. (Message and data rates may apply.) I understand this request has been initiated by me and is an unscheduled contact request. I further understand that this request, initiated by me, is my affirmative consent to be contacted which is in compliance with all federal and state Telemarketing and Do-Not-Call regulations. Upon providing my consent to be contacted, I am not required to purchase any Medicare-related product or services and I understand that I may revoke my consent at any time by visiting our Consent Revocation Form. Upon revocation, I understand that Compare Med Quotes will comply with applicable TCPA regulations and ensure I am removed from any contact list within the timeframe required by law. I agree to this website's Privacy Policy and acknowledge that as a member I will receive insurance quote reminders and special promotions sent to me via e-mail. I acknowledge that I have read and understood this website's Terms and Conditions, and I agree to be bound by them. I also agree with the Privacy Policy & DNC Policy and understand that ComparemedQuotes.com will not sell my information.`;

function validate(fields) {
  const errors = {};

  if (!fields.fname.trim()) errors.fname = "First name is required";
  if (!fields.lname.trim()) errors.lname = "Last name is required";

  if (!fields.phoneNo.trim()) {
    errors.phoneNo = "Phone number is required";
  } else if (!/^\+?[\d\s\-().]{7,15}$/.test(fields.phoneNo.trim())) {
    errors.phoneNo = "Enter a valid phone number";
  }

  if (!fields.zipcode.trim()) {
    errors.zipcode = "Zip code is required";
  } else if (!/^\d{5}(-\d{4})?$/.test(fields.zipcode.trim())) {
    errors.zipcode = "Enter a valid 5-digit zip code";
  }

  return errors;
}

const initialState = {
  fname: "",
  lname: "",
  phoneNo: "",
  zipcode: "",
};

const Form = memo(function Form() {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});









const [userIp, setUserIp] = useState("");

useEffect(() => {
  const controller = new AbortController();

  fetch("https://api.ipify.org?format=json", {
    signal: controller.signal,
  })
    .then((response) => {
      if (!response.ok) throw new Error(`IP lookup failed: ${response.status}`);
      return response.json();
    })
    .then(({ ip }) => setUserIp(ip))
    .catch((error) => {
      if (error.name !== "AbortError") {
        console.error("Could not fetch user IP:", error);
      }
    });

  return () => controller.abort();
}, []);




  const handleChange = useCallback(
    (e) => {
      const { id, value } = e.target;

      setFields((prev) => ({
        ...prev,
        [id]: value,
      }));
      if (touched[id]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[id];
          return next;
        });
      }
    },
    [touched],
  );

  const handleBlur = useCallback(
    (e) => {
      const { id } = e.target;
      setTouched((prev) => ({ ...prev, [id]: true }));
      const errs = validate({ ...fields });
      setErrors((prev) => ({ ...prev, [id]: errs[id] }));
    },
    [fields],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const allTouched = {
        fname: true,
        lname: true,
        phoneNo: true,
        zipcode: true,
      };
      setTouched(allTouched);
      const errs = validate(fields);
      setErrors(errs);
      if (Object.keys(errs).length === 0) {
        setSubmitted(true);
      }
    },
    [fields],
  );

  const handleReset = useCallback(() => {
    setFields(initialState);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  }, []);

  if (submitted) {
    return (
      <div className={styles.success} role="alert">
        <div className={styles.successIcon}>
          <CheckIcon />
        </div>
        <h3 className={styles.successTitle}>Form submitted successfully</h3>
        <p className={styles.successText}>
          A licensed insurance agent will reach out to you shortly.
        </p>
        <button className={styles.resetBtn} onClick={handleReset}>
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Medicare plan review request"
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="fname" className={styles.label}>
            First Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="fname"
            className={`${styles.input} ${errors.fname ? styles.inputError : ""}`}
            placeholder="First Name"
            value={fields.fname}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="given-name"
            aria-required="true"
            aria-describedby={errors.fname ? "fname-error" : undefined}
          />
          {errors.fname && (
            <span id="fname-error" className={styles.error} role="alert">
              {errors.fname}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="lname" className={styles.label}>
            Last Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="lname"
            className={`${styles.input} ${errors.lname ? styles.inputError : ""}`}
            placeholder="Last Name"
            value={fields.lname}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="family-name"
            aria-required="true"
            aria-describedby={errors.lname ? "lname-error" : undefined}
          />
          {errors.lname && (
            <span id="lname-error" className={styles.error} role="alert">
              {errors.lname}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="phoneNo" className={styles.label}>
          Phone No <span className={styles.required}>*</span>
        </label>
        <input
          type="tel"
          id="phoneNo"
          className={`${styles.input} ${errors.phoneNo ? styles.inputError : ""}`}
          placeholder="Phone No"
          value={fields.phoneNo}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="tel"
          aria-required="true"
          aria-describedby={errors.phoneNo ? "phoneNo-error" : undefined}
        />
        {errors.phoneNo && (
          <span id="phoneNo-error" className={styles.error} role="alert">
            {errors.phoneNo}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="zipcode" className={styles.label}>
          Zip Code <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="zipcode"
          className={`${styles.input} ${errors.zipcode ? styles.inputError : ""}`}
          placeholder="Zip Code"
          value={fields.zipcode}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="postal-code"
          inputMode="numeric"
          maxLength={10}
          aria-required="true"
          aria-describedby={errors.zipcode ? "zipcode-error" : undefined}
        />
        {errors.zipcode && (
          <span id="zipcode-error" className={styles.error} role="alert">
            {errors.zipcode}
          </span>
        )}
      </div>
      <div className={styles.consentWrapper}>
        <p className={styles.consentText}>{CONSENT_TEXT}</p>
      </div>
      <input
        id="leadid_token"
        name="universal_leadid"
        type="hidden"
        value=""
      ></input>
      <input type="hidden" name="user_ip" id="user_ip" value={userIp} readOnly></input>
      <button type="submit" id="submit" className={styles.submitBtn}>
        submit
      </button>
    </form>
  );
});

export default Form;
