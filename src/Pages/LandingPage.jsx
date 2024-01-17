import React, { useEffect, useState } from 'react'
import Logo from '../assets/owowLogo.png'
import PayrollImg from '../assets/Group47458.png'
import LottieAnimation from '../Components/ LottieAnimation';

import SocialInstagram from '../assets/SocialInstagramIcon.png'
import SocialFacebook from '../assets/SocialFacebookIcon.png'
import SocialTwitter from '../assets/SocialTwitterIcon.png'
import SocialLinkdin from '../assets/SocialLinkdinIcon.png'

const LandingPage = () => {


  return (
    <>
      <section>
        <div class="container p-4">
          <div className='d-flex justify-content-between'>
            <img src={Logo} className='img-fluid' />
            <button className='btn join-waitlist-button'>Join the waitlist</button>
          </div>
        </div>
        <div class="container main-hero-div mt-5">
          <div className='row'>
            <div className='col-sm-6 col-12'>
              <div className='tag'>Future of work is here, where are you?</div>
              <h1>Hire vetted talent in <br />India</h1>
              <h3>And save 70% on salaries</h3>
              <div className='d-flex justify-content-between mt-5 mb-4'>
                <div className='d-flex justify-content-between tag' style={{ gap: "12px" }}>
                  <div>
                    <img src={PayrollImg} className='img-fluid' />
                  </div>
                  <div className='d-flex flex-column payroll-and-compilance' >
                    <div>Payroll and compliance</div>
                    <div>Manage Global Payroll with 1 click</div>
                  </div>
                </div>
                <div className='d-flex justify-content-between tag' style={{ gap: "12px" }}>
                  <div>
                    <img src={PayrollImg} className='img-fluid' />
                  </div>
                  <div className='d-flex flex-column payroll-and-compilance'>
                    <div>Payroll and compliance</div>
                    <div>Manage Global Payroll with 1 click</div>
                  </div>
                </div>
              </div>
              <button className='btn join-waitlist-button'>Join the waitlist</button>

            </div>
            <div className='col-sm-6 col-12'>
              <LottieAnimation />
            </div>
          </div>
        </div>
        <div class="container">
          <div className='d-flex justify-content-between'>
            <div className='d-flex text-white' style={{ gap: "16px" }}>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p className='text-white'>© 2024 OWOW talents inc. All rights reserved</p>
            </div>
            <div className='d-flex text-white' style={{ gap: "16px" }}>
              <img src={SocialInstagram} className='img-fluid' />
              <img src={SocialFacebook} className='img-fluid' />
              <img src={SocialTwitter} className='img-fluid' />
              <img src={SocialLinkdin} className='img-fluid' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage