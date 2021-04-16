import React from "react";

function Footer() {
  const email = "sodiq.ajayi@yahoo.com";
  const phone1 = "+234809749738";
  const phone2 = "+2347053465291";
  const address = "Abeokuta, Ogun State";
  var d = new Date();
  var year = d.getFullYear();

  return (
    <>
      <footer className="mh-footer mh-footer-3" id="mh-contact">
        <div className="container-fluid">
          <div className="row section-separator">
            <div
              className="col-sm-12 section-title wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <h3>Contact Me</h3>
            </div>
            <div className="map-image image-bg col-sm-12">
              <div className="container mt-30">
                <div className="row">
                  <div className="col-sm-12 col-md-6 mh-footer-address">
                    <div className="col-sm-12 xs-no-padding">
                      <div
                        className="mh-address-footer-item dark-bg shadow-1 media wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.2s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-location-arrow"></i>
                        </div>
                        <div className="each-info media-body">
                          <h4>Address</h4>
                          <address>
                            {address}.<br />
                            Nigeria.
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 xs-no-padding">
                      <div
                        className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.4s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-envelope-o"></i>
                        </div>
                        <div className="each-info media-body">
                          <h4>Email</h4>
                          <a href={`mailto:${email}`}>{email}</a>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 xs-no-padding">
                      <div
                        className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-phone"></i>
                        </div>
                        <div className="each-info media-body">
                          <h4>Phone</h4>
                          <a href={`callto:${phone1}`}>{phone1}</a>
                          <br />
                          <a href={`callto:${phone2}`}>{phone2}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    <form
                      action="https://formspree.io/f/mpzogdgp"
                      method="POST"
                      id="contactForm"
                      className="single-form quate-form wow fadeInUp"
                      data-toggle="validator"
                    >
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="row">
                        <div className="col-sm-12">
                          <input
                            name="name"
                            className="contact-name form-control"
                            id="name"
                            type="text"
                            placeholder="First Name"
                            required
                          />
                        </div>

                        <div className="col-sm-12">
                          <input
                            name="email"
                            className="contact-subject form-control"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>

                        <div className="col-sm-12">
                          <textarea
                            name="message"
                            className="contact-message"
                            id="message"
                            rows="6"
                            placeholder="Your Message"
                            required
                          ></textarea>
                        </div>

                        {/* <!-- Subject Button --> */}
                        <div className="btn-form col-sm-12">
                          <button
                            type="submit"
                            className="btn btn-fill btn-block"
                            id="form-submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="col-sm-12 mh-copyright wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="text-left text-xs-center">
                          <p>
                            <b href="#">&#169; Ajayi Sodiq {year}</b>
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 display-6">
                        <ul className="social-icon ">
                          <li>
                            <a href="https://www.facebook.com/surdyhey">
                              <i className="fa fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/surdy_a">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/Surdy-A">
                              <i className="fa fa-github"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://linkedin.com/in/surdya">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
