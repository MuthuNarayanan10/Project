import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer sections">
                <div className="footer-inner">
                    <div className="row content-section">
                        <div class="col-md-6 mb-4 mb-lg-0">
                            <ul class="list-inline mt-4">
                                <li class="list-inline-item"><a href="https://www.linkedin.com/company/develearn-technologies"><img className="logo-img" src="icon2.png" /></a></li>
                                <li class="list-inline-item"><a href="https://www.facebook.com/develearntechnologies"><img className="logo-img" src="icon1.png" /></a></li>
                                <li class="list-inline-item"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@develearn.in&su=SUBJECT&body=BODY&bcc=contact@develearn.in"><img className="logo-img" src="mail.svg" /></a></li>
                                <li class="list-inline-item"><img className="logo-img" src="icon3.png" /></li>
                                <li class="list-inline-item"><a href="https://www.instagram.com/develearn.institute/"><img className="logo-img" src="instagram.png" /></a></li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h4>Contact Us At : 088502 99596</h4>
                            <h4>Toll-Free number : 18002102989</h4>
                            <h4>Address : 472/22, Mohan Nivas, 1st Floor, Opposite Maheshwari Udyan,
                                King's Circle, Matunga (C.R.), Mumbai, Maharashtra 400019</h4>
                        </div>
                    </div>
                    <div className="row content-section mt-70">
                        <ul className="footer-nav m-auto">
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/course" className="nav-link">COURSES</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/xr-learning" className="nav-link">XR LEARNING</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/events" className="nav-link">EVENTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts" className="nav-link">CONTACTS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="text-foot">All Rights Reserved by Develearn Technologies Pvt Ltd </p>
                </div>
            </div>
        )
    }
}
