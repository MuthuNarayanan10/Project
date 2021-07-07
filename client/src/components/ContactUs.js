import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Register from './Register'
import '../App.css'
export default class ContactUs extends Component {
    render() {
        return (
            <div className="contactus">
            <div className="landing-sections">
                <div className="content-section">
                    <div className="NavContainer">
                        <Header />
                    </div>
                </div>
            </div>
            <div className="sections">
                <h2 className="mb-75">Contact Us</h2>
                <div className="list-box">
               
                <div class="contact">
            <div class="container mb-7">
              
                <div class="row">
                    <div class="col-12 col-md-5">
                        <div class="text-left">
                        <Register />
                        </div>
                    </div>
                    <div class="col-12 col-md-1"></div>

                    <div class="col-12 col-md-6">
                        <div class="row" style={{ alignItems: 'self-start', textAlign: 'left' }}>
                            <div class="col-12 col-md-12 col-lg-6">
                                <img src="placeholder.svg" alt="" className="contact-icons" />
                                <p>472 / 22, Mohan Nivas, 1st Floor, Opposite Maheshwari Udyan, King's Circle, Matunga (C.R.), Mumbai, Maharashtra - 400019</p>
                            </div>
                            <div class="col-12 col-md-12 col-lg-6">
                                <p><img src="phone-receiver.svg" alt="" className="contact-icons" />
                                    <a href="tel:18002102989">18002102989</a></p>
                                <p><img src="mail.svg" alt="" className="contact-icons" />
                                    <a href="mailto:contact@develearn.in"> contact@develearn.in</a>
                                </p>
                                <p><img src="telephone.svg" alt="" className="contact-icons" />
                                    <a href="tel:9967118298"> +91 9967118298</a></p>
                                <p class="ml-4"><a href="tel:8850299596"> &nbsp;+91 8850299596</a></p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <iframe title="deveLearn" className="map-height" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7543.702420399507!2d72.8558!3d19.026277!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87f49959b01ff035!2sDeveLearn+Technologies+Data+Sciences+Institute!5e0!3m2!1sen!2sin!4v1558530000648!5m2!1sen!2sin" width="100%" height="450px" frameborder="0" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>

                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}
