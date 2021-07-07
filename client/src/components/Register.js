import React from "react"
import axios from 'axios';
import {ip} from './constant.js';

import {
    withRouter
  } from 'react-router-dom'
  
const CheckBox = (props) => (
    <label className="select-course black sub ">
        <input key={props.id} name={props.name} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
    </label>
);

 class Register extends React.Component {
    state = {
          
            name: '',
            MobileNo: '',
            email: '',
            message: '',

            sent: false,
            sendingEmail: false,

            courses: [
                { id: 1, name: "CourseSeleccted", value: "Python Programming Laguage", isChecked: false },
                { id: 2, name: "CourseSeleccted", value: "R-Language", isChecked: false },
                { id: 3, name: "CourseSeleccted", value: "Hadoop", isChecked: false },
                { id: 4, name: "CourseSeleccted", value: "Satistics-and-Probebality", isChecked: false },
                { id: 5, name: "CourseSeleccted", value: "Machine-Learning", isChecked: false },
                { id: 6, name: "CourseSeleccted", value: "Deep-Learning", isChecked: false },
                { id: 7, name: "CourseSeleccted", value: "NLP", isChecked: false },
                { id: 8, name: "CourseSeleccted", value: "Tabluae", isChecked: false },
                { id: 9, name: "CourseSeleccted", value: "PGDM", isChecked: false },
                { id: 10, name: "CourseSeleccted", value: "DCDS", isChecked: false },
                { id: 11, name: "CourseSeleccted", value: "DCDS+AI", isChecked: false },
                { id: 12, name: "CourseSeleccted", value: "BI", isChecked: false },
                { id: 13, name: "CourseSeleccted", value: "WEB DEVELOPER", isChecked: false },
                { id: 14, name: "CourseSeleccted", value: "MIS", isChecked: false },
                { id: 15, name: "CourseSeleccted", value: "GRAPHICS", isChecked: false },
                { id: 15, name: "CourseSeleccted", value: "DATA SCIENCE CERTIFICATION", isChecked: false }
            ],
            selectedCourses: []
        };
    


    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleMobile = (e) => {
        this.setState({
            MobileNo: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }



    handleCourses = (e) => {
        this.setState({
            courses: e.target.value
        })
    }


    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleCheckChieldElement = (e) => {
        this.setState(prevState => ({
            courses: prevState.courses.map(
                obj => (obj.value === e.target.value ? Object.assign(obj, { isChecked: e.target.checked }) : obj)
            ),
        }));
        if (e.target.checked) {
            this.setState({ selectedCourses: this.state.selectedCourses.concat(e.target.value) })
        } else {
            var array = [...this.state.selectedCourses]; // make a separate copy of the array
            var index = array.indexOf(e.target.value)
            if (index >= 0) {
                array.splice(index, 1);
                this.setState({ selectedCourses: array });
            }
        }
        // console.log(this.state.selectedCourses)
    }


    formSubmit = (e) => {
        e.preventDefault();
        this.setState({ sendingEmail: true})
        // console.log(this.state.name, this.state.MobileNo, this.state.email, this.state.selectedCourses)
        let data = {
            name: this.state.name,
            MobileNo: this.state.MobileNo,
            email: this.state.email,
            message: this.state.message,
            courses: this.state.selectedCourses,

        }

        axios.post(`${ip}/api/form`, data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            }).catch(() => {
                console.log("not sent")
            })
    }


    resetForm = () => {
        this.setState({
            name: '',
            MobileNo: '',
            email: '',
            message: '',
            selectedCourses: '',
            courses: this.state.courses.map(
                obj => (Object.assign(obj, { isChecked: false }))
            ),
        })

        setTimeout(() => {
            this.setState({
                sent: "false"
            })
        }, 1000)

        this.props.history.push('/confirm');
    }

    render() {
      
        return (
            <div>
                <form
                    name="form"
                    method="post"
                    action="/confirm"

                    onSubmit={this.formSubmit}
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="Registration" />
                    <p hidden>
                        <label>
                            Don’t fill this out:{" "}
                            <input name="bot-field" onChange={this.handleChange} />
                        </label>
                    </p>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="name" className="form-control custom-form-control" placeholder="Rahul Sharma" value={this.state.name} onChange={this.handleName} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="MobileNo">Contact Number</label>
                        <input type="text" className="form-control custom-form-control" name="MobileNo" placeholder="+91" value={this.state.MobileNo} onChange={this.handleMobile} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control custom-form-control" placeholder="abc@xyz.com" value={this.state.email} onChange={this.handleEmail} required />
                    </div>
                    <div className="form-btn-group">
                        <label htmlFor="coursesInterested" className="title-label" value={this.state.courses} onChange={this.handleCourses}>Courses Interested</label><br />
                        {
                            this.state.courses.map((course) => {
                                return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...course} />)
                            })
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="additionalMessage" >Additional Message</label>
                        <textarea type="text" name="message" className="form-control custom-form-control" value={this.state.message} onChange={this.handleMessage} rows="6" placeholder="Hi, I am interested in learning ..."  ></textarea>
                    </div>
                    <button type="submit" className="custom-btn black d-block sub">SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);