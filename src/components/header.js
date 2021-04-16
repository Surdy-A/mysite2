import React, { useState } from "react";



function Header() {
    const [nav, setNav] = useState(false);
    // const [mode, setMode] = useState(true)

    const showMenu = () => {
        setNav(!nav);
    }

    return (
        <>
            <header class="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav" id="mh-header">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-expand-lg mh-nav nav-btn">
                            <button onClick={showMenu} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon icon"></span>
                            </button>

                            <div class={nav ? "collapse navbar-collapse active show" : "collapse navbar-collapse "} id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto ml-auto">
                                    <li class={nav ? "nav-item" : "nav-item"}>
                                        <a class="nav-link" href="#mh-home" onClick={showMenu}>Home</a>
                                    </li>
                                    <li class={nav ? "nav-item" : "nav-item"} >
                                        <a class="nav-link" href="#mh-about" onClick={showMenu}>About</a>
                                    </li>
                                    <li class={nav ? "nav-item" : "nav-item"}>
                                        <a class="nav-link" href="#mh-skills" onClick={showMenu}>Skills</a>
                                    </li>
                                    <li class={nav ? "nav-item" : "nav-item"}>
                                        <a class="nav-link" href="#mh-experience" onClick={showMenu}>Experiences</a>
                                    </li>
                                    <li class={nav ? "nav-item" : "nav-item"}>
                                        <a class="nav-link" href="#mh-portfolio" onClick={showMenu}>Portfolio</a>
                                    </li>
                                     <li class={nav? "nav-item" :"nav-item"}>
                                        <a class="nav-link" href="#mh-testimonial" onClick={showMenu}>Testimonials</a>
                                    </li> 
                                    {/* <li class={nav? "nav-item" :"nav-item"}>
                            <a class="nav-link" href="#mh-blog" onClick={showMenu}>Blog</a>
                        </li> */}
                                    <li class={nav ? "nav-item" : "nav-item"}>
                                        <a class="nav-link" href="#mh-contact" onClick={showMenu}>Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
