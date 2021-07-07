import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import {ip} from './constant.js'

export default class Confirm extends React.Component {
   
    
    render() {
        return (
            <div className="confirm">
            <div className="landing-sections">
                <div className="content-section">
                    <div className="NavContainer">
                        <Header />
                    </div>
                </div>
            </div>
       
            <Footer />
        </div>
        )
    }}