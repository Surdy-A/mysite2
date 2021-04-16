import React from "react";
import Typewriter from "typewriter-effect";
import AboutContent from '../content/aboutComtent';

function Home() {
 
const links = AboutContent[0].links;
const skills = AboutContent[0].skill;
console.log(links)

  return (
    <>
      <section className="mh-home image-bg home-2-img" id="mh-home">
        <div className="img-foverlay img-color-overlay">
          <div className="container">
            <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
              <div className="col-sm-6">
                <div className="mh-header-info">
                  <div
                    className="mh-promo wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.1s"
                  >
                    <span>Hello I'm</span>
                  </div>

                  <h2
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    Ajayi Sodiq
                  </h2>
                  <h4
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Full-Stack Developer",
                          "Computer Engineering Student",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h4>

                  <ul>
                    {AboutContent.map((aboutme, index) => (
                      <span key={index}>
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.4s"
                        >
                          <i className="fa fa-envelope"></i>
                          <a href={`mailto:${aboutme.email}`}>
                            {aboutme.email}
                          </a>
                        </li>
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.5s"
                        >
                          <i className="fa fa-phone"></i>
                          <a href={`callto:${aboutme.phone}`}>
                            {aboutme.phone}
                          </a>
                        </li>
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.6s"
                        >
                          <i className="fa fa-map-marker"></i>
                          <address>{aboutme.location}</address>
                        </li>
                      </span>
                    ))}
                  </ul>

                  <ul
                    className="social-icon wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                  >
                    {links.map((link, index) => (
                      <span key={index}>
                      <li>
                        <a href={link.url}>
                          <i className={`fa fa-${link.name}`}></i>
                        </a>
                      </li>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="hero-img wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.6s"
                >
                  <div className="img-border">
                    {AboutContent.map((aboutme, index) => (
                      <img
                        key={index}
                        src={aboutme.image}
                        alt="profile"
                        className="img-fluid"
                        style={{ height: "360", width: "360" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Aboout Section */}
      <section className="mh-about" id="mh-about">
        <div className="container">
          <div className="row section-separator">
            <div className="col-sm-12 col-md-6">
              <div
                className="mh-about-img shadow-2 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                {AboutContent.map((aboutme) => (
                  <img src={aboutme.image} alt="" className="img-fluid" />
                ))}
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mh-about-inner">
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  About Me
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  {AboutContent.map((aboutme) => aboutme.description)}
                </p>
                <div
                  className="mh-about-tag wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  <ul>
                    {skills.map((skill) => (
                      <li>
                        <span>{skill.skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="btn btn-fill wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  <a href="#mh-contact">Downlaod CV</a>{" "}
                  <i className="fa fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
