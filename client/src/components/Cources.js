import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
export default class Cources extends Component {
    render() {
        return (
            <div className="cources">
            <div className="landing-sections">
                <div className="content-section">
                    <div className="NavContainer">
                        <Header />
                    </div>
                </div>
            </div>
            <div className="sections">
                <h2 className="mb-75">Cources</h2>
                <div className="list-box">

                </div>
            </div>
        </div>
        )
    }
}
