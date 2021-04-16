import React from "react";
import skills from '../content/skills'
function Skills() {
  

  return (
    <>
      <section className="mh-skills" id="mh-skills">
        <div className="home-v-img">
          <div className="container">
            <div className="row section-separator">
              <div className="section-title text-center col-sm-12">
                {/* <!--<h2>Skills</h2>--> */}
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-skills-inner">
                  <div
                    className="mh-professional-skill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <h3>Technical Skills</h3>
                    <div className="each-skills">
                      {skills.map((skill) => (
                        <div className="candidatos">
                          <div className="parcial">
                            <div className="info">
                              <div className="nome">{skill.tech_skill}</div>
                              <div className="percentagem-num">
                                {skill.tech_skill_percent}%
                              </div>
                            </div>
                            <div className="progressBar">
                              <div
                                className="percentagem"
                                style={{
                                  width: `${skill.tech_skill_percent}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div
                  className="mh-professional-skills wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <h3>Professional Skills</h3>
                  <ul className="mh-professional-progress">
                    {skills.map((skill) => (
                      <div className="candidatos">
                        {skill.prof_skill == null ? (
                          ""
                        ) : (
                          <div className="parcial">
                            <div className="info">
                              <div className="nome">{skill.prof_skill}</div>
                              <div className="percentagem-num">
                                {skill.prof_skill_percent}%
                              </div>
                            </div>
                            <div className="progressBar">
                              <div
                                className="percentagem"
                                style={{
                                  width: `${skill.tech_skill_percent}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
