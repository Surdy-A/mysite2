import React, { useState, useEffect } from "react";
import PortfolioContent from '../content/portfolioContent'

function Portfolio() {
  const [project, setProject] = useState(1);
  const [technologies, setTechnologies] = useState([]);


    

  useEffect(() => {

    setTechnologies(PortfolioContent[project - 1].technology);
  }, [project]);

  
  const selectProject = (id) => {
    setProject(id);
  };
  console.log(project);

  return (
    <>
    <section className="mh-portfolio" id="mh-portfolio">
        <div className="container">
          <div className="row section-separator">
            <div
              className="section-title col-sm-12 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.1s"
            >
              <h3>Recent Portfolio</h3>
            </div>
            <div className="part col-sm-12">
              <div className="portfolio-nav col-sm-12" id="filter-button">
                <ul>
                  <li
                    data-filter="*"
                    className="current wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    <span>All Categories</span>
                  </li>
                  <li
                    data-filter=".WebDevelopment"
                    class="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    <span>Web Development</span>
                  </li>
                  <li
                    data-filter=".MobileApp"
                    class="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <span>Mobile Application</span>
                  </li>
                </ul>
              </div>
              <div
                className="mh-project-gallery col-sm-12 wow fadeInUp"
                id="project-gallery"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s"
              >
                <div className="portfolioContainer row">
                  {PortfolioContent.map((port) => (
                    <div
                      className={`grid-item col-md-4 col-sm-6 col-xs-12 ${port.category}`}
                    >
                      <figure>
                        {/* <h1>{port.id}</h1> */}
                        <img src={port.image} alt="img04" />
                        <figcaption className="fig-caption">
                          <i className="fa fa-search"></i>
                          <h5 className="title">{port.project_title}</h5>
                          <span className="sub-title">{port.description}</span>
                          <a
                            href={port.image}
                            data-fancybox
                            data-src="#mh"
                            onClick={() => selectProject(port.id)}
                          >p</a>

                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
                {/* <!-- End: .grid .project-gallery --> */}
              </div>
              {/* <!-- End: .grid .project-gallery --> */}
            </div>
            {/* <!-- End: .part --> */}
          </div>
          {/* <!-- End: .row --> */}
        </div>
        <div className="mh-portfolio-modal" id="mh">
          <div className="container">
            <div className="row mh-portfolio-modal-inner">
              <div className="col-sm-5">
                {PortfolioContent.map((port) =>
                  project === port.id ? (
                    <span>
                      <h2>
                        {" "}
                        {port.id}. {port.project_title}
                      </h2>
                      <p>{port.description}</p>
                      <div className="mh-about-tag">
                        <ul>
                          {technologies.map((technology) =>
                            project === port.id ? (
                              <li>
                                <span>{technology.skill}</span>
                              </li>
                            ) : (
                              ""
                            )
                          )}
                        </ul>
                      </div>
                      <a
                        target="_blank"
                        href={port.url}
                        className="btn btn-fill"
                        rel="noreferrer">               
                        Live Demo
                      </a>
                    </span>
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="col-sm-7">
                <div className="mh-portfolio-modal-img">
                  {PortfolioContent.map((port) =>
                    project === port.id ? (
                      <span>
                        <img
                          src={port.image}
                          alt="project"
                          className="img-fluid"
                        />
                      </span>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
