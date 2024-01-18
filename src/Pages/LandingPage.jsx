import React, { useEffect, useState } from 'react'
import Logo from '../assets/owowLogo.png'
import PayrollImg from '../assets/Group47458.png'
import LottieAnimation from '../Components/ LottieAnimation';

import SocialInstagram from '../assets/SocialInstagramIcon.png'
import SocialFacebook from '../assets/SocialFacebookIcon.png'
import SocialTwitter from '../assets/SocialTwitterIcon.png'
import SocialLinkdin from '../assets/SocialLinkdinIcon.png'
import FlagIndia from '../assets/flagindia.png'

const LandingPage = () => {


  return (
    <>
      <section>
        <div class="container p-4">
          <div className='d-flex justify-content-between'>
            <a href='#'><img src={Logo} className='img-fluid' /></a>
            <button className='btn join-waitlist-button'>Join the waitlist</button>
          </div>
        </div>
        <br />
        <div class="container main-hero-div mt-5">
          <div className='row'>
            <div className='col-sm-7 col-12'>
              {/* <button className="cst-button"> <span class="button__label">Future of work is here, where are you?</span> </button> */}
              <button className="cst-button">Future of work is here, where are you?</button>
              <h1>Hire vetted talent in <br /><span>India </span><img src={FlagIndia} /></h1>
              <h3>And save 70% on salaries</h3>
              <div className='d-flex mt-5 mb-4' style={{ gap: "16px" }}>
                <div className='d-flex justify-content-between cst-button' style={{ gap: "12px" }}>
                  <div>
                    <img src={PayrollImg} className='img-fluid' />
                  </div>
                  <div className='d-flex flex-column payroll-and-compilance' >
                    <div>Payroll and compliance</div>
                    <div className='cst-para2'>Manage Global Payroll with 1 click</div>
                  </div>
                </div>
                <div className='d-flex justify-content-between cst-button' style={{ gap: "12px" }}>

                  <div>
                    <img src={PayrollImg} className='img-fluid' />
                  </div>
                  <div className='d-flex flex-column payroll-and-compilance'>
                    <div>Payroll and compliance</div>
                    <div className='cst-para2'>Manage Global Payroll with 1 click</div>
                  </div>
                </div>

              </div>
              <button className='btn join-waitlist-button'>Join the waitlist</button>

            </div>
            <div className='col-sm-5 col-12'>
              <LottieAnimation />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className='footer-cst'>
        <div class="container">
          <div className='d-flex justify-content-between pt-5 pb-5'>
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