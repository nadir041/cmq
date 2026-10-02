import React, { memo } from "react";
import HeroSection from "../components/sections/HeroSection";
import IntroSection from "../components/sections/IntroSection";
import OptionsSection from "../components/sections/OptionsSection";
// import WhyUsSection from "../components/sections/WhyUsSection";
import HospitalIndemnity from "../components/sections/HospitalIndemnity";
import heroStyles from "../components/sections/HeroSection.module.css";
const Home = memo(function Home() {
  return (
    <main id="main-content">
      <div className={heroStyles.enrollmentNotice} role="note">
        <p>
          [Medicare Parts A and B beneficiaries may qualify for a Special Enrollment Period to enroll in a Medicare Advantage plan if they experience certain life events, such as being New to Original Medicare, Aging into Original Medicare, On Medicare Parts A and B but have recently moved, Lost your Health Insurance. Please contact us if you've experienced a qualifying event to learn more about your Special Enrollment Period options.]
        </p>
      </div>
      <HeroSection />
      <IntroSection />
      <HospitalIndemnity />
      <OptionsSection />
      {/* <WhyUsSection /> */}
    </main>
  );
});

export default Home;
