import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
export default class XRLearning extends Component {
    render() {
        return (
            <div className="learning">
                <div className="landing-sections">
                    <div className="content-section">
                        <div className="NavContainer">
                            <Header />
                        </div>
                        <div className="contents-xr">
                            <img src="mobile.png"/>
                            <div className="xr-content">
                            <h1><span>Your</span> Content, <span>Your</span> Reality</h1>
                            <h1> straight to <span>Your</span> Classroom</h1>
                            <a href="#" class="custom-btn pa black xrnow"> Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <h2 className="mb-75 mt-100">XR Learning</h2>
                    <div className="list-box">
                        <div className="aboutus-top-sections">


                            <div className="video-box">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/JXP_hrFuTLc" allowfullscreen></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div class="how-section1 content-section">
                        <h2 className="mb-75">Develearn x EON Reality Features</h2>
                        <div class="row m-0">
                            <div class="col-md-6">
                                <h2>
                                Effortless Self-service AR & VR    
                                </h2>
                                <p class="text-muted">
                                Designed to bring Augmented and Virtual Reality solutions to as many people around the world as possible, 
                                EON-XR removes the obstacles that often come with incorporating AR and VR into an academic or industrial environment. 
                                Through EON-XR, educators, trainers, employers, and other users are able to create interactive and immersive AR and VR lessons without needing any coding or advanced technological knowledge.
                                </p>
                                <p class="text-muted">
                                The lessons can then be distributed to their audience of students, trainees, employees, or the general public for consumption on common devices ranging from smartphones to laptops to publicly available headsets. 
                                EON-XR is preparing millions of students, employees, and citizens for the present and future while both replacing and aiding traditional training and teaching methods in dozens of countries around the world.
                                </p>
                            </div>
                            <div class="col-md-6 how-img">
                                <img src="xr-platform.png" class=" img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col-md-6 how-img">
                                <img src="xr-remote-classroom.png" class=" img-fluid" alt="" />
                            </div>
                            <div class="col-md-6">
                                <h2>
                                XR for education & enterprise
                                </h2>
                                <p class="text-muted">
                                Transitioning from more traditional training and education methods into AR and VR can seem like a headache too severe to be worth it — and a lot of the time, it is. 
                                That’s because most Augmented and Virtual Reality solutions are created by developers, engineers, and other technology professionals who expect their clientele to have a pre-existing understanding of the hardware and/or software. 
                                </p>
                                <p class="text-muted">
                                On the other hand, EON Reality works directly with academic and vocational training experts around the world to make sure EON-XR is effortless and accessible for anyone who has a stable internet connection and access to a smartphone or relatively modern computer. 
                                EON-XR is designed to allow subject matter experts such as educators and trainers to share their knowledge with future generations as seamlessly as possible, which means without forcing them to learn complex coding or development tools.
                                </p>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col-md-6">
                                <h2>
                                AR & VR for everyday usage
                                </h2>
                                <p class="text-muted">
                                Distributing the next AR or VR lesson on EON-XR is always only a few clicks away. Rather than treating XR as a specialized tool reserved only for specific situations, 
                                EON-XR can be used in day-to-day life for any teaching or training purposes. Through tools such as the Vault and the EON-XR Marketplace, in addition to the world’s largest AR and VR library for education and enterprise purposes, 
                                users are able to choose from countless pre-fabricated 3D models and 360° environments or upload their own from dozens of different common formats with EON Reality’s simplified conversion tool.
                                </p>
                                <p class="text-muted">
                                Once the object or environment is uploaded to EON-XR, in-depth lessons about the subject can be created and distributed in as little as 15 minutes while still including features such as 
                                voiceover recording, text-to-speech annotations, embedded videos, interactive activities, and multiple forms of evaluations for assessing performance.
                                </p>
                            </div>
                            <div class="col-md-6 how-img">
                                <img src="xr-group-interactions.png" class=" img-fluid" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="sectionsD">
                        <div className="short-contentD">
                            <h2 className="mb-75">Eorn reality video window</h2>
                            <div className="image-containerD text-center">
                                <img src="device.svg" />
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row m-0 text-center">

                            <br />
                            <p>
                                <a href="#" class=" btn-store">
                                    <img src="gplay.png"></img>
                                </a>

                                <a href="#" class=" btn-store">
                                    <img src="windows.png"></img>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
