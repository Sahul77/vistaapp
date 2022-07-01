import React from 'react'
import { Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <Outlet/>
      <div className="footer-section">
      <div className="container footer-container">
        <div className="col-lg-3 col-md-6 footer-logo">
          <img src="assets/images/logo-white.png" alt="footer logo" />
          <p className="footer-susection-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-lg-3 col-md-6 footer-subsection">
          <div className="footer-subsection-2-1">
            <h3 className="footer-subsection-title">Quick Links</h3>
            <ul className="footer-subsection-list">
              <li><a href="/#"><span className="ti-angle-right"></span> About Us</a></li>
              <li><a href="/#"><span className="ti-angle-right"></span> Our Services</a></li>
              <li><a href="/#"><span className="ti-angle-right"></span> Our Pricing</a></li>
              <li><a href="/#"><span className="ti-angle-right"></span> Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-subsection">
          <h3 className="footer-subsection-title">Contact</h3>
          <ul className="footer-subsection-list">
            <li>street 10, 3rd cross Koramagala</li>
            <li>0123456789</li>
            <li><a href="/#">yourmail@yourdomain.com</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-subsection">
          <div className="footer-subsection-2-2">
            <h3 className="footer-subsection-title">Follow Us</h3>
            <div className="footer-social-media-icons-section">
              <a href="/#" className="footer-social-media-icon"><span className="ti-twitter"></span></a>
              <a href="/#" className="footer-social-media-icon"><span className="ti-instagram"></span></a>
              <a href="/#" className="footer-social-media-icon"><span className="ti-facebook"></span></a>
              <a href="/#" className="footer-social-media-icon"><span className="ti-linkedin"></span></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-credits">
        <p>&copy; 2022 All Rights Reserved.</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
