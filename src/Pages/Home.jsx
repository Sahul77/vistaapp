import React from 'react'


const Home = () => {
  return (
    <div>

<div className="wrapper">
    <div className="header">
      <div className="container header-container">
        <div className="col-lg-6 header-img-section">
          <img src="assets/images/banner-2.svg" alt="banner" />
        </div>
        <div className="col-lg-6 header-title-section">
          <h1 className="header-title">Vistha Software Development Company.</h1>
          <p className="header-title-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
          <div className="learn-more-btn-section">
            <a className="nav-link learn-more-btn" href="/#services"><span className="ti ti-settings"></span> Our Services</a><a
              className="nav-link learn-extra-btn" href="/#contact"><span className="ti ti-arrow-right"></span> Contact Us</a>
          </div>
        </div>
      </div>
    </div>
     <div id="about"></div>

<div className="about-section">

  <div className="container about-container">
    <div className="col-lg-5 col-md-12 about-header-img">
      <img src="assets/images/about-2.svg" alt="aboutus banner" />
    </div>
    <div className="col-lg-6 offset-lg-1 col-md-12 about-title-section">
      <p className="about-subtitle">About Vistha</p>
      <h2 className="about-title">Software Development Company</h2>
      <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci est, accumsan eu
        gravida sed, euismod eget erat. Donec a consequat felis, in tristique nisl. Proin justo est, semper at
        maximus a, pharetra et ligula. Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum, eros arcu
        congue dolor, sed fermentum ex arcu a ante. </p>
      <div className="learn-more-btn-section">
        <a className="nav-link learn-more-btn" href="/#services"><span className="ti ti-support"></span> Services</a>
      </div>
    </div>
  </div>
</div>
<div id="services"></div>

<div className="services-section">
  <div className="container">
    <div className="col-lg-12 col-sm-12 about-title-section">
      <p className="about-subtitle">Vistha Software</p>
      <h2 className="about-title">Software Services</h2>
      <p className="about-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci est, accumsan
        eu gravida sed, euismod eget erat.</p>
      <div className="row service-list">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="service-box">
            <span className="icon ti-layout"></span>
            <h5 className="my-4">Web Development</h5>
            <p>Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="service-box">
            <span className="icon ti-mobile"></span>
            <h5 className="my-4">Andriod Apps</h5>
            <p>Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="service-box">
            <span className="icon ti-location-arrow"></span>
            <h5 className="my-4">Online Booking</h5>
            <p>Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="service-box">
            <span className="icon ti-shopping-cart"></span>
            <h5 className="my-4">eCommerce Services</h5>
            <p>Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="service-box">
            <span className="icon ti-shield"></span>
            <h5 className="my-4">Network Support</h5>
            <p>Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="service-box">
            <span className="icon ti-cloud-up"></span>
            <h5 className="my-4">Cloud Solutions</h5>
            <p>Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 <div id="pricing"></div>

<div className="pricing-section">
  <div className="container pricing-container">
    <div className="row">
      <div className="col-lg-12">
        <div className="pricing-title">
          <h2>Pricing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ac lectus et semper.
            Nullam
            in nunc tortor.</p>
        </div>
      </div>
    </div>
    <div className="pricing-plan-cards-section">
      <div className="col-lg-4 col-md-8 col-xs-10 pricing-card-section">
        <div className="pricing-card pricing-one">
          <p className="pricing-period"><img src="assets/images/pricing/cycle.png" alt="cycle" /></p>
          <p className="pricing-rate">FREE</p>
          <div className="pricing-all-plan-features-section basic-plan-features-section">
            <ul>
              <li>Free Applications</li>
              <li><s>24X7 Support</s></li>
              <li><s>High Quality Design</s></li>
              <li><s>Clinet Location Support</s></li>
            </ul>
          </div>
          <a className="nav-link learn-extra-btn m-0" href="/#contact"><i className="fa fa-apple" aria-hidden="true"></i>
            Register</a>
        </div>
      </div>
      <div className="col-lg-4 col-md-8 col-xs-10 pricing-card-section">
        <div className="pricing-card featured">
          <p className="pricing-period"><img src="assets/images/pricing/scooter.png" alt="scooter" /></p>
          <p className="pricing-rate">$1.99</p>
          <div className="pricing-all-plan-features-section medium-plan-features-section">
            <ul>
              <li>Unlimited Quotations</li>
              <li>24X7 Support</li>
              <li>High Quality Design</li>
              <li><s>Clinet Location Support</s></li>
            </ul>
          </div>
          <a className="nav-link learn-more-btn" href="/#contact"><i className="fa fa-apple" aria-hidden="true"></i>
            Register</a>
        </div>
      </div>
      <div className="col-lg-4 col-md-8 col-xs-10 pricing-card-section">
        <div className="pricing-card pricing-three">
          <p className="pricing-period"><img src="assets/images/pricing/car.png" alt="car" /></p>
          <p className="pricing-rate">$4.99</p>
          <div className="pricing-all-plan-features-section advance-plan-features-section">
            <ul>
              <li>Unlimited Quotations</li>
              <li>24X7 Support</li>
              <li>High Quality Design</li>
              <li>Clinet Location Support</li>
            </ul>
          </div>
          <a className="nav-link learn-extra-btn m-0" href="/#contact"><i className="fa fa-apple" aria-hidden="true"></i>
            Register</a>
        </div>
      </div>
    </div>
  </div>
</div>
  <div id="blog"></div>

<div className="blog-section">
  <div className="container blog-container">
    <div className="col-lg-12 col-sm-12">
      <p className="about-subtitle">Vistha Blog</p>
      <h2 className="about-title">Our Latest Blog</h2>
      <p className="about-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci est, accumsan
        eu
        gravida sed, euismod eget erat.</p>
    </div>
    <div className="col-lg-4 col-sm-12">
      <div className="blog-details">
        <div className="blog-img">
          <img src="assets/images/blog/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-text">
          <h5>Mauris consequat tristique mi vel eleifend.</h5>
          <p><span className="ti-calendar"></span> 12 Mar 2020</p>
          <p>Software</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-sm-12">
      <div className="blog-details">
        <div className="blog-img">
          <img src="assets/images/blog/blog-2.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-text">
          <h5>Mauris consequat tristique mi vel eleifend.</h5>
          <p><span className="ti-calendar"></span> 12 Mar 2020</p>
          <p>News</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-sm-12">
      <div className="blog-details mb-0">
        <div className="blog-img">
          <img src="assets/images/blog/blog-3.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-text">
          <h5>Mauris consequat tristique mi vel eleifend.</h5>
          <p><span className="ti-calendar"></span> 12 Mar 2020</p>
          <p>Tech</p>
        </div>
      </div>
    </div>
  </div>
</div>
 



<div id="contact"></div>

<div className="contact-section">
  <div className="container contact-container">
    <div className="col-md-6 col-sm-12">
      <form className="contact-form">

        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <div className="form-group mb-0">
          <button type="submit" className="btn learn-more-btn">Submit</button>
        </div>
      </form>
    </div>
    <div className="col-md-5 offset-md-1 col-sm-12 contact-header-img">
      <div className="pricing-title">
        <h2>Contact Us</h2>
        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ac lectus et
          semper. Nullam in nunc tortor.</p>
      </div>
      <img src="assets/images/contact.svg" alt="contact banner" />
    </div>
  </div>
</div>
    </div>



    </div>
  )
}

export default Home
