import React from "react";
import testimonials from '../content/testimonialContent';

function Testimonials() {
    
    return (
        <>
        <section class="mh-testimonial" id="mh-testimonial">
            <div class="home-v-img">
                <div class="container">
                    <div class="row section-separator">
                        <div class="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                            <h3>Client Reviews</h3>
                        </div>
                        <div class="col-sm-12 wow fadeInUp" id="mh-client-review" data-wow-duration="0.8s" data-wow-delay="0.3s">
                      
                        {testimonials.map((testimonial, index)=>(
                            <div class="each-client-item" key={index}>
                                <div class="mh-client-item dark-bg black-shadow-1">
                                    <img src="assets/images/avatar.png" alt="testimonier" class="img-fluid"  style={{maxWidth:"116", maxHeight:"116"}}/>
                                    <p>{testimonial.testimony}</p>
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.post}</span>
                                   <div><a href="https://www.facebook.com/sabino">Contact</a></div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonials;
