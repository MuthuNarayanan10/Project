import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
export default class Aboutus extends Component {
    render() {
        return (
            <div className="aboutUs">
                <div className="landing-sections">
                    <div className="content-section">
                        <div className="NavContainer">
                            <Header />
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <h1 className="mb-75">About Us</h1>
                    <div className="aboutus-top-sections">
                    <img src="aboutus_topleft.png" className="aboutus-top"/>
                        <div className="content-box mb-75">
                            <h2>Who We Are</h2>
                            <p>On one side of the country, there are lakhs of unemployed graduates. On the other side, there are companies who are struggling to find the right talent. It all boils down to one root cause - “Talent gap’. Fortunately, this is exactly the problem we solve. We bridge the gap between industry and academia. We help students acquire the right skills and expose them to the myriad of career opportunities available in the world of data science.
</p>
                            <br />
                            <p>
                            Our institution is an II Tian initiative to offer cutting-edge data science courses with
world-class content created by our team of industry professionals. We have
partnered with a plethora of institutions in Maharashtra including the P.A.H. solapur
University , Gondwana University,North Maharashtra University. We offer interactive
face-to-face offline and online training programs to students. We also have a
sophisticated e-learning portal to enable students to learn data science from
anywhere, anytime.</p>
                        </div>
                        <div className="content-box">
                            <h2>What we offer</h2>
                            <p>Online and offline live, face-to-face classes and self-paced coursework. An
Interdisciplinary curriculum grounded in Computer Science, Statistics, Mathematics,
Strategic behaviour Data Science &amp; AI. Practical learning over theoretical
knowledge: A project-based and experiential learning approach. Learn to design
your own Models and Networks that can effectively analyse and infer from data.
Master Machine Learning through Python and R. Learn industry standard libraries
such as Tensorflow and Caffe. Gain insights into Data Visualization • Become a
Cybersecurity expert and learn ethical hacking.</p>
                        </div>
                        <img src="aboutus_topright.png" className="aboutus-bottom"/>
                    </div>
                    <div className="sections">
                        <h1>Meet the team</h1>
                        <div className="team-container">
                            <div className="team">
                                <div className="team-pic">
                                {/* <img src="akshat-kadam.jpg" className="team-pic"/> */}
                                <img src="people-akshat-kadam.png" />
                                </div>
                                <h4>Akshat Kadam</h4>
                                <h5>Co-founder & CEO</h5>
                                <p>Akshat is an Electrical Engineer and alumnus of IIT – Bombay. Specialising in Computer Vision, he served as a Research Scientist at Sony Japan working on emerging products in Virtual & Augmented Reality, before contributing as a Technology Strategist to Sony R&D’s new Indian subsidiary Sony Research India.</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">
                                <img src="people-sanjay-kadam.png" />
                                </div>
                                <h4>Dr. Sanjay Kadam</h4>
                                <h5>Co-founder & Director</h5>
                                <p>With over 21 years of experience in the IT industry, Dr.Kadam has made a name through his time with Aptech Education & his ability to identify emerging technologies and the changing IT trends.
                                   He has led the introduction of many Develearn courses including Hadoop, Java, and Data Science and Analytics.</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">
                                <img src="people-vidya-kadam.png" />
                                </div>
                                <h4>Dr. Vidya Kadam</h4>
                                <h5>Co-founder & COO</h5>
                                <p>A tech-enthusiast with over 21 years of experience in IT Education. Her zeal for tech-education inspired her to co-found DeveLearn. She has been the driving force of the ever-evolving ecosystem of talents produced by organization.</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">
                                <img src="people-jagruti-lamba.png" />
                                </div>
                                <h4>Jagruti Lamba</h4>
                                <h5>Faculty & Admin - Academics</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">
                                <img src="people-aparna-singh.png" />
                                </div>
                                <h4>Aparna Singh</h4>
                                <h5>Data Scientist & Trainer</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">
                                <img src="people-prajakta-kulkarni.png"/>
                                </div>
                                <h4>Prajakta Kulkarni</h4>
                                <h5>Senior Faculty & Big Data Specialist</h5>
                                <p>Prajakta specializes in Big Data technologies such as Hadoop, Storm, Spark & more. Having spent over 8 years in the education and software development space, she brings her experience of working on real time projects in ML and Hadoop to the classroom.</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">
                                <img src="people-pawan-shivhare.png" />
                                </div>
                                <h4>Pawan Shivhare</h4>
                                <h5>Data Engineer & Academic Trainer</h5>
                                <p>Pawan has a bachelor’s  degree in Civil Engineering from DCE. His drive for data analysis and business research has led him to work for many Start-ups. He currently serving as a Data Engineer & Academic Trainer at Develearn.</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">
                                <img src="people-muthu-arumugam.png" />
                                </div>
                                <h4>Muthu Arumugam</h4>
                                <h5>Full Stack Developer</h5>
                                <p>Muthu is a problem solver at heart and passionate about Web Application Development. A passionate solo traveler, his dedication to constantly upgrading his work also projects from his quiet personality.</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">
                                <img src="people-prithviraj-tiwari.png" />
                                </div>
                                <h4>Prithviraj Tiwari</h4>
                                <h5>Graphics & UI/UX</h5>
                                <p>With a flair for the aesthetic, Prithviraj brings life to our projects through his design creations & approach. One of his goals is to enable students learn about good design & user experience through the Develearn platform. </p>
                            </div>
                            {/*
                            <div className="team">
                                <div className="team-pic">

                                </div>
                                <h4>Nisha Vavia</h4>
                                <h5>Academic Trainer</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                            </div>
                            <div className="team">
                                <div className="team-pic">

                                </div>
                                <h4>Kunal Pawar</h4>
                                <h5>Junior Data Scientist</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                            </div>
                            */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
