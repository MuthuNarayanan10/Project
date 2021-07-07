import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Thanks extends React.Component {
    render() {
        return (
            <div className="thanks">
            <div className="landing-sections">
                <div className="content-section">
                    <div className="NavContainer">
                        <Header />
                    </div>
                </div>
            </div>
            <div className="sections">
                    <h2 className="mb-75">Thanks for reaching out! We will get back to you soon. Feel free to navigate away from this page.</h2>
                    </div>
            <Footer />
        </div>
        )
    }}