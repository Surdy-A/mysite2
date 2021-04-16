import React from 'react'
import servicesContent from '../content/serviceContent'

function Service() {
   
    
    return (
        <>
             <section className="mh-service">
            <div className="container">
                <div className="row section-separator">
                    <div className="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        <h2>What I do</h2>
                    </div>
                    
                   {
                       servicesContent.map((service, index) => (
                        <div className="col-sm-4" key={index}>
                        <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                            <i className="fa fa-code iron-color"></i>
                            <h3>{service.service}</h3>
                            <p>
                               {service.description}
                            </p>
                        </div>
                    </div>
                       ))
                   }

                </div>
            </div>
        </section>
        </>
    )
}

export default Service;
