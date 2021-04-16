import React from "react";
import ExperienceContent from "../content/experienceContent";

function Experience() {
  return (
    <>
      <section className="mh-experince image-bg featured-img-one"   id="mh-experience">
        <div className="img-color-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 col-md-6">
                <div className="mh-education">
                  <h3 className="wow fadeInUp" experiences-wow-duration="0.8s" experiences-wow-delay="0.2s">Education</h3>
                  <div className="mh-education-deatils">
                    {/* <!-- Education Institutes--> */}
                    {ExperienceContent.map((experience)=>(
                     experience.course === "null"? '':
                     <div className="mh-education-item dark-bg wow fadeInUp" experiences-wow-duration="0.8s"
                     experiences-wow-delay="0.3s"
                     style={{ maxHeight: "225" }}>
                     <h4>
                       {experience.course} From{" "}
                       <a href="/">{experience.school}</a>
                     </h4>
                     <div className="mh-eduyear">
                       {experience.start_school}-{experience.end_school}
                     </div>
                     <p>{experience.school_description} </p>
                   </div>
                  
                    ))}
                    {/* <!-- End Education Institutes--> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-work">
                  <h3>Work Experience</h3>
                  {ExperienceContent.map((experience) => (
                    <div className="mh-experience-deatils">
                      {/* <!-- Education Institutes--> */}
                      <div
                        className="mh-work-item dark-bg wow fadeInUp"
                        experiences-wow-duration="0.8s"
                        experiences-wow-delay="0.4s"
                      >
                        <h4>
                          {experience.work} At{" "}
                          <a href="https://sambadraft.com/">
                            {experience.company}
                          </a>
                        </h4>
                        <div className="mh-eduyear">
                          {experience.start_work}-{experience.end_work}
                        </div>
                        <span>Responsibility :</span>
                        <ul className="work-responsibility">
                          <p>
                            {/* <i className="fa fa-circle"></i> */}
                            {experience.work_description}
                          </p>
                          {/* <li>
                          <i className="fa fa-circle"></i>Project Management
                        </li> */}
                        </ul>
                      </div>
                      {/* <!-- Education Institutes--> */}
                      <br/>
                    </div>
                  ))}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
