import React, { useEffect, useState } from 'react'
import Logo from '../assets/owowLogo.png'
import PayrollImg from '../assets/Group47458.png'
import PayrollImg2 from '../assets/Group47459.png'
 import LottieAnimation from '../Components/ LottieAnimation';
import SocialInstagram from '../assets/SocialInstagramIcon.png'
import SocialFacebook from '../assets/SocialFacebookIcon.png'
import SocialTwitter from '../assets/SocialTwitterIcon.png'
import SocialLinkdin from '../assets/SocialLinkdinIcon.png'
import FlagIndia from '../assets/flagindia.png'
import FlagUsa from '../assets/flagUsa.png'
import FlagGlobe from '../assets/flagGlobe.png'

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const countries = ['India', 'USA', 'Globally'];
  const flags = [FlagIndia, FlagUsa, FlagGlobe];
  const [key, setKey] = useState(0); // Added key state
  const savingsTexts = ['And save 70% on salaries', 'Upto 6 weeks on hiring', 'Upto 75% on salaries'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % countries.length);
      setKey((prevKey) => prevKey + 1); // Increment the key to restart the animation
    }, 5000); // Change country and flag every 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);
  return (
    <>
      <section className='pt-4 pb-4 px-2'>
        <div class="container">
          <div className='d-flex justify-content-between'>
            <a href='#'><img src={Logo} className='img-fluid' /></a>
            <button className='btn join-waitlist-button'>Join the waitlist</button>
          </div>
        </div>
        <div class="dislay-desktop"> <br /> </div>
        <div class="container main-hero-div mt-5">
          <div className='row'>
            <div className='col-sm-7 col-12 order-1'>
              {/* <button className="cst-button"> <span class="button__label">Future of work is here, where are you?</span> </button> */}
              <button className="cst-button">Future of work is here, where are you?</button>
              <h1>
                Hire vetted talent in <br />
                <span key={key} className='typewriter'>
                  {countries[index]} <img src={flags[index]} alt={`Flag for ${countries[index]}`} />
                </span>
              </h1>
              <h3 key={key}>{savingsTexts[index]}</h3>
              <div className='d-flex flex-wrap mobile-gap mt-5 mb-4'>
                <div className='d-flex justify-content-between cst-button' style={{ gap: "12px" }}>
                  <div>
                    <img src={PayrollImg} className='img-fluid' />
                  </div>
                  <div className='d-flex flex-column payroll-and-compilance' >
                    <div className='cst-para1'>Payroll and compliance</div>
                    <div className='cst-para2'>Manage Global Payroll with 1 click</div>
                  </div>
                </div>
                <div className='d-flex justify-content-between cst-button' style={{ gap: "12px" }}>

                  <div>
                    <img src={PayrollImg2} className='img-fluid' />
                  </div>
                  <div className='d-flex flex-column payroll-and-compilance'>
                    <div className='cst-para1'>Local procurement</div>
                    <div className='cst-para2'>Manage Local procurement with 1 click</div>
                  </div>
                </div>

              </div>
              <div className='center-button-on-mobile'>
              <button className='btn join-waitlist-button2'>Join the waitlist</button>
              </div>

            </div>
            <div className='col-sm-5 col-12 order-2'>
              <LottieAnimation />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className='footer-cst'>
        <div class="container">
          <div className='d-flex pt-5 pb-5 footer-main-flex'>
            <div className='d-flex ' style={{ gap: "16px" }}>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p >© 2024 OWOW talents inc. All rights reserved</p>
            </div>
            <div className='d-flex ' style={{ gap: "16px" }}>
              <a href='https://www.linkedin.com/company/saletancy/' target='_blank'>
                <img src={SocialLinkdin} className='img-fluid' />
              </a>
              <a href='https://x.com/saletancy?s=20' target='_blank'>
                <img src={SocialTwitter} className='img-fluid' />
              </a>
              <a href='https://www.facebook.com/saletancy' target='_blank'>
                <img src={SocialFacebook} className='img-fluid' />
              </a>
              <a href='https://www.instagram.com/saletancy/' target='_blank'>
                <img src={SocialInstagram} class Name='img-fluid' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage