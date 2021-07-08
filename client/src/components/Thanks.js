import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import queryString from 'query-string'
import base64 from 'react-native-base64'
import axios from 'axios'
import {ip} from './constant.js'

export default class Thanks extends React.Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        const currentUrl = queryString.parse(base64.decode(params.id));

        let data = {
            name: currentUrl.name,
            MobileNo: currentUrl.mobile,
            email: currentUrl.email,
            message: currentUrl.message,
            courses: currentUrl.courses,

        }

        axios.post(`${ip}/api/acceptmail`, data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            }).catch(() => {
                console.log("not sent")
            })
    }

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
                    <h2 className="mb-75">
                        Thanks for reaching out! We will get back to you soon. Feel free to navigate away from this page.
                    </h2>
                    {/* <p>{params.id}</p>
                    <p>{base64.decode(params.id)}</p>
                    <p>{currentUrl.name}</p> */}
            </div>
            <Footer />
        </div>
        )
    }}