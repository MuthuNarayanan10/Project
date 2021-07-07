import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Slider from "react-slick";

import slide_one from '../assests/1.jpg'

import slide_two from '../assests/1-1.jpg'
import slide_three from '../assests/2-1.jpg'
import slide_four from '../assests/3-1.jpg'
import slide_five from '../assests/4-1.jpg'
import slide_six from '../assests/5-1.jpg'
import slide_seven from '../assests/6-1.jpg'
import slide_eight from '../assests/7-1.jpg'
import slide_nine from '../assests/8-1.jpg'
import slide_ten from '../assests/Hyderabad.jpg'

import slide_two_one from '../assests/main-1-2.jpg'
import slide_two_two from '../assests/1-2.jpg'
import slide_two_three from '../assests/2-2.jpg'
import slide_two_four from '../assests/3-2.jpg'
import slide_two_five from '../assests/4-2.jpg'
import slide_two_six from '../assests/5-2.jpg'
import slide_two_seven from '../assests/6-2.jpg'
import slide_two_eight from '../assests/7-2.jpg'
import slide_two_nine from '../assests/8-2.jpg'

import slide_three_one from '../assests/s-u-1.jpg'
import slide_three_two from '../assests/s-u-2.jpg'
import slide_three_three from '../assests/s-u-3.jpg'
import slide_three_four from '../assests/s-u-4.jpg'
import slide_three_five from '../assests/s-u-5.jpg'
import slide_three_six from '../assests/s-u-6.jpg'
import slide_three_seven from '../assests/s-u-7.jpg'
import slide_three_eight from '../assests/s-u-8.jpg'


import slide_four_one from '../assests/p-s-a-h-1.jpg'
import slide_four_two from '../assests/p-s-a-h-2.jpg'
import slide_four_three from '../assests/p-s-a-h-3.jpg'
import slide_four_four from '../assests/p-s-a-h-4.jpg'
import slide_four_five from '../assests/p-s-a-h-5.jpg'



import slide_five_one from '../assests/g-u-1.jpg'
import slide_five_two from '../assests/g-u-2.jpg'
import slide_five_three from '../assests/g-u-3.jpg'
import slide_five_four from '../assests/g-u-4.jpg'
import slide_five_five from '../assests/g-u-5.jpg'

import slide_six_one from '../assests//R-language-MOOC-main.jpg'
import slide_six_two from '../assests/R-language-MOOC-1.jpg'
import slide_six_three from '../assests/R-language-MOOC-2.jpg'


var settings = {
    dots: false,
    autoplay: 3000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    variableHeight: true,
    swipe: true,
    touchMove: true,
    arrows: true,
};
const EachSlide = (props) => (
    <div className="mr-2">
        <img src={props.image} alt="" className="slide-img" />
    </div>
);




const Events = () => (
    <div className="events">
        <div className="landing-sections">
            <div className="content-section">
                <div className="NavContainer">
                    <Header />
                </div>
            </div>
        </div>
        <div className="sections">
            <h2 className="mb-75">Events</h2>
            <div className="list-box content-section">

                <div className="row m-0">
                    <div className="col-12 col-md-12 col-xl-1"></div>
                    <div className="col-12 col-md-12 col-xl-10">
                        <div className="event-top-content">
                            <p>Indian engineering colleges, in general, have a 10-year old syllabus. The courses have to be updated to stay in sync with the evolving technology. This is why we conduct faculty development programs (FDP) in colleges.</p>
                            <h3>About FDP</h3>

                            <p>We train the Head of the Department (HODs) of IT and Computer Science oriented courses. The program enables the HODs to understand the latest trends in the data science domain and upgrade the syllabus. DeveLearn has been conducting student and faculty training programs over the years. Here is a list of some recent events: </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-xl-1"></div>
                </div>
                <div className="row m-0">
                    <div className="col-12 col-md-12 col-xl-1"></div>
                    <div className="col-12 col-md-12 col-xl-10">
                        <div className="events-section">
                            <h3>FDP in Machine Learning &amp; Big Data Analytics in collabortion with TASK</h3>
                            <h5>Date: 7th &amp; 8th May, 2018.</h5>
                            <h5>Venue: CMR Institutes of Technology – Hyderabad, Telangana.</h5>
                            <div className="gallery-slider">
                                <Slider {...settings}>
                                    <EachSlide image={slide_one} />
                                    <EachSlide image={slide_two} />
                                    <EachSlide image={slide_three} />
                                    <EachSlide image={slide_four} />
                                    <EachSlide image={slide_five} />
                                    <EachSlide image={slide_six} />
                                    <EachSlide image={slide_seven} />
                                    <EachSlide image={slide_eight} />
                                    <EachSlide image={slide_nine} />
                                </Slider>

                            </div>
                        </div>

                        <div className="events-section">
                            <h3>Student orientation at PVPIT – Sangli</h3>
                            {/* <h5>Date: 26th April, 2018.</h5>
                            <h5>Venue: </h5> */}
                            <div className="gallery-slider">
                                <Slider {...settings}>
                                    <EachSlide image={slide_two_one} />
                                    <EachSlide image={slide_two_two} />
                                    <EachSlide image={slide_two_three} />
                                    <EachSlide image={slide_two_four} />
                                    <EachSlide image={slide_two_five} />
                                    <EachSlide image={slide_two_six} />
                                    <EachSlide image={slide_two_seven} />
                                    <EachSlide image={slide_two_eight} />
                                    <EachSlide image={slide_two_nine} />
                                </Slider>
                            </div>
                        </div>

                        <div className="events-section">
                            <h3>Faculty Development Program in Python &amp; Hadoop at PVPIT – Sion</h3>
                            <h5>Date: 3rd July, 2018.</h5>
                            <h5>Venue: Padmabhushan Vasantdada Patil Pratishthan College of Engineering – Sion</h5>
                            {/* <div className="gallery-slider">
                                <Slider {...settings}>
                                    <EachSlide image={slide_four_one} />
                                    <EachSlide image={slide_four_two} />
                                    <EachSlide image={slide_four_three} />
                                    <EachSlide image={slide_four_four} />
                                    <EachSlide image={slide_four_five} />
                                    <EachSlide image={slide_four_six} />
                                    <EachSlide image={slide_four_seven} />
                                    <EachSlide image={slide_four_eight} />
                                    <EachSlide image={slide_four_nine} />
                                </Slider>
                            </div> */}
                        </div>

                        <div className="events-section">
                            <h3>Faculty Development Programme - Shivaji University, Kolhapur, Maharashtra</h3>
                            <h5>Date: 10th to 16th of December  2018.</h5>
                            <h5>Venue:  Shivaji Univarsity Kolhapur, Maharashtra </h5>
                            <div className="gallery-slider">
                                <Slider {...settings}>
                                    <EachSlide image={slide_three_one} />
                                    <EachSlide image={slide_three_two} />
                                    <EachSlide image={slide_three_three} />
                                    <EachSlide image={slide_three_four} />
                                    <EachSlide image={slide_three_five} />
                                    <EachSlide image={slide_three_six} />
                                    <EachSlide image={slide_three_seven} />
                                    <EachSlide image={slide_three_eight} />
                                </Slider>
                            </div>
                        </div>

                        <div className="events-section">
                            <h3>Punyashlok Ahilyadevi Holkar Solapur University</h3>

                            <div className="gallery-slider">
                                <Slider {...settings}>
                                    <EachSlide image={slide_four_one} />
                                    <EachSlide image={slide_four_two} />
                                    <EachSlide image={slide_four_three} />
                                    <EachSlide image={slide_four_four} />
                                    <EachSlide image={slide_four_five} />
                                </Slider>
                            </div>
                        </div>


                        <div className="events-section">
                            <h3>Gondawana University MoU</h3>

                            <div className="gallery-slider">
                                <Slider {...settings}>
                                    <EachSlide image={slide_five_one} />
                                    <EachSlide image={slide_five_two} />
                                    <EachSlide image={slide_five_three} />
                                    <EachSlide image={slide_five_four} />
                                    <EachSlide image={slide_five_five} />
                                </Slider>
                            </div>
                        </div>

                        <div className="events-section">
                            <h3>Datapanthy</h3>
                            <h5>R Language FREE  MOOC in association with Computer Science Department Mumbai University in charge Dr Prof Ambuja Salgaonkar.</h5>
                            <h5>Date: 10th May 2019</h5>
                            <h5><b>Register:</b> <a href="https://develearn.in/datapanthy" target="_blank" rel="noopener noreferrer">https://develearn.in/datapanthy</a>.</h5>
                            <div className="gallery-slider">
                                <Slider {...settings}>
                                    <EachSlide image={slide_six_one} />
                                    <EachSlide image={slide_six_two} />
                                    <EachSlide image={slide_six_three} />
                                </Slider>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-12 col-xl-1"></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
export default Events;