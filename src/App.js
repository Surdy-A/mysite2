import {useState} from 'react';
import Header from './components/header';
import Home from './components/home';
import Service from './components/service';
import Skills from './components/skills';
import Experience from './components/experience';
import Portfolio from './components/portfolio';
import Review from './components/review';
import Footer from './components/footer';
import { Helmet } from 'react-helmet';
import Testimonials from './components/testimonials';



function App() {
  const [mode, setMode] = useState(true);

  const setWhiteMode = ()=>{
    setMode(!mode);
  }
  
  return (
    <>
      <div className="section-loader">
            <div className="loader">
                <div></div>
                <div></div> 
            </div>
        </div>
      {/* dark and light toggler */}
        <div className="demo-style-switch" id="switch-style">
    <div id="toggle-switcher" className="switch-button" data-toggle="tooltip" title= {mode? "Dark Mode!" : "Light Mode!"}><i class="fa fa-sun-o"  onClick={setWhiteMode}></i></div>
    <div className="switched-options">
    </div>
    </div>
    <Helmet>
          <body className={mode? "dark-vertion black-bg" : "white-vertion black-bg"} />
    </Helmet>

      <Header />
      <Home />
      <Service />
      <Skills />
      <Experience />
      <Portfolio />
      <Review />
      {/* <Blog /> */}
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
