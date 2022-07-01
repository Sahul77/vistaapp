import React from 'react'

const Price = () => {
  return (
    <div>
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
          <a className="nav-link learn-extra-btn m-0" href="#contact"><i className="fa fa-apple" aria-hidden="true"></i>
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
          <a className="nav-link learn-more-btn" href="#contact"><i className="fa fa-apple" aria-hidden="true"></i>
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
          <a className="nav-link learn-extra-btn m-0" href="#contact"><i className="fa fa-apple" aria-hidden="true"></i>
            Register</a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Price
