import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile">
        <div className="navbar-container container">

          <div className="navbar-brand">
            <Link className="navbar-brand-logo" to="/">
              <img src="assets/images/logo.png" alt="logo" />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ti-layout-grid2"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <p className="nav-link-menu">Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  <p className="nav-link-menu">About Us</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  <p className="nav-link-menu">Services</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/price">
                  <p className="nav-link-menu">Pricing</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  <p className="nav-link-menu">Blog</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonials">
                  <p className="nav-link-menu">Testimonials</p>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link learn-more-btn btn-invert" to="/contact"><span className="ti ti-arrow-right"></span>
                  Contact</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Header
