import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props)
  this.state={
    isToggle:false
  }
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    console.log("This")
    this.setState(prevState => ({
      isToggle: !prevState.isToggle
    }));

  }
  render() {
    return (
      <div className="NavContainer">
        <div className="topnav">
          <ul className="social">
            <li><a href=""><img src="twitter.svg" className="logohead"/></a></li>
            <li><a href="https://www.linkedin.com/company/develearn-technologies"><img src="linkedin.svg" className="logohead" /></a></li>
            <li><a href="https://www.facebook.com/develearntechnologies"><img src="facebook.svg" className="logohead"/></a></li>
            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@develearn.in&su=SUBJECT&body=BODY&bcc=contact@develearn.in"><img src="mail.png" className="logohead"/></a></li>
            <li><a href="#"><img src="call.png" className="logohead"/>
              <span className="mobile">
                <span>+91 9967118298</span>
                <span>Give us a call</span>
              </span>
            </a></li>
          </ul>
        </div>
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid p-0">
            <Link to="/" className="nav-link navbar-brand"><img src="logo.png" className="log" /></Link>
            <button className="navbar-toggler" type="button" onClick={this.toggle} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><img src ="favicon.png"></img></span>
            </button>
            <div className={'collapse navbar-collapse ' + (this.state.isToggle ? 'show' : ' ')} id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/course" className="nav-link">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link to="/xr-learning" className="nav-link">xr learning</Link>
                </li>
                <li className="nav-item">
                  <Link to="/events" className="nav-link">Events</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacts" className="nav-link">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

