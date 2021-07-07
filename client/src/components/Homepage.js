import React ,{Component}  from 'react';

import Header from './Header'
import Footer from './Footer'
import Marquee from "react-fast-marquee";
import Map from './Map'


  export default class Homepage extends Component {
    
    render() {

        return (
            <div className="homepage">
                <div className="landing-sections">
                    <div className="content-section">
                        <div className="NavContainer">
                            <Header />
                            <div className="contents advance">
                                <h1><span>Advance</span> your career </h1>
                                <a href="#" class="custom-btn pa black learn">Learn More</a>
                            </div>
                            <div className="class-room">
                                <h2>A Modern Classroom</h2>
                                <p>Offline and online training programs have their own pros and cons. But we help you get the best of both worlds. Pick the one that works for you!</p>
                                <div className="btn-container">
                                    <a href="#" className="custom-btn  black">online class</a>
                                    <a href="#" className="custom-btn  black">offline class</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sections science">
                    <div className="short-content">
                        <h2 className="mb-75">Why Data Science?</h2>
                        <p>Companies have forged ahead from trial-and-error to data-driven decisions. Data analysis is succoring organizations to unlock a whole new level of relevance in every move they make. It helps them spot the right opportunities, market to the right people at the right time, recruit the right talent and what not? It's no surprise that companies are dumping millions into this space.</p>
                    </div>
                    <div className="grid-section content-section mt-127">
                        <div className="image-container">
                            <img src="draw1.png" />
                        </div>
                        <div className="grid-content-container">
                            <div className="custom-col mr-40">
                                <span>
                                    Offline and online training programs have their own pros and cons. But we help you get the best of both worlds. Pick the one that works for you!
                </span>
                                <span>
                                    Offline and online training programs have their own pros and cons. But we help you get the best of both worlds. Pick the one that works for you!
                </span>
                                <span>
                                    Offline and online training programs have their own pros and cons. But we help you get the best of both worlds. Pick the one that works for you!
          </span>
                            </div>
                            <div className="custom-col">
                                <span>
                                    Offline and online training programs have their own pros and cons. But we help you get the best of both worlds. Pick the one that works for you!
          </span>
                                <span>
                                    Offline and online training programs have their own pros and cons. But we help you get the best of both worlds. Pick the one that works for you!
          </span>
                                <span>
                                    Offline and online training programs have their own pros and cons. But we help you get the best of both worlds. Pick the one that works for you!
          </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <div className="short-content">
                        <h2 className="mb-75">Collaborative Institute Map</h2>
                        <div className="image-container1 text-center ">
                   
                     <Map/>
                     
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <h2 className="mb-75">Variety of courses</h2>
                    <div className="courses content-section">
                        <div className="course">
                            <img src="Python.png" />
                            <p>Python, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                        </div>
                        <div className="course">
                            <img src="Django.png" />
                            <p>Django, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                        </div>
                        <div className="course">
                            <img src="Hadoop.png" />
                            <p>Hadoop, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                        </div>
                     
                    </div>
                    <div className="content-section h-100">
                        <a href="#" className="custom-btn black d-block">Browse Courses</a>
                    </div>
                </div>
                <br />
                <div className="sections">
                    <h2 className="mb-75">Testimonials</h2>
             <Marquee>
                    <div className="testimonials">
                
                        <div className="testimonial">
                            <img src="testimonial1.png" alt="test1"/>
                            <p>I am pursuing chartered accountancy and I am learning Python with DeveLearn. I found the faculty really skillful and love the way they use real-life examples to make things easier to understand.</p>
                            <p>- Jay Jain</p>
                        </div>
                        <div className="testimonial">
                            <img src="testimonial2.png" />
                            <p>I am a mechanical engineer with 3 years of experience under my belt (1 from Dubai). I found DeveLearn after a lot of research and it was one of my best decisions. The staff was very professional and approachable.</p>
                            <p>- Shahrukh Hussain</p>
                        </div>
                        <div className="testimonial">
                            <img src="testimonial3.png" />
                            <p>I am an electrical engineer with a master’s in signal processing. My experience with DeveLearn has been wonderful so far. Learning is a lot of fun with them and I recommend DeveLearn to anyone interested in data analytics.</p>
                            <p>- Shantanu Karanth</p>
                        </div>
                     
                    </div>
                    </Marquee>
                </div>
                <div className="sections">
                    <h2 className="mb-75">Our Partners</h2>
                    <div className="partners">
                        <div className="partner">
                            <img src="p1.png" />
                        </div>
                        <div className="partner">
                            <img src="p2.png" />
                        </div>
                        <div className="partner">
                            <img src="p3.png" />
                        </div>
                               <div className="partner">
                            <img src="Podar.svg" />
                        </div>
                        <div className="partner">
                            <img src="Pratap.svg" />
                        </div>
                        <div className="partner">
                            <img src="k.svg" />
                        </div>
                        <div className="partner">
                            <img src="nmu.svg" />
                        </div>
                  
                  
                  
                     
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
