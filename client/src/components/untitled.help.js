import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import slide_one from '../assests/1.jpg'
import Slider from "react-slick";





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
                <div className="list-box">
              
                <div className="row">
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
                <div className="row">
                    <div className="col-12 col-md-12 col-xl-1"></div>
                    <div className="col-12 col-md-12 col-xl-10">
                        <div className="events-section">
                            <h3>FDP in Machine Learning &amp; Big Data Analytics in collabortion with TASK</h3>
                            <h5>Date: 7th &amp; 8th May, 2018.</h5>
                            <h5>Venue: CMR Institutes of Technology – Hyderabad, Telangana.</h5>
                            <div className="gallery-slider">
                             
                            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="1.jpg"
                     alt="Another alt text"/>

        </div>
            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="2.jpg"
                     alt="Another alt text"/>

        </div>

            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="3.jpg"
                     alt="Another alt text"/>

        </div>

                            </div>
                        </div>
                        
                        <div className="events-section">
                            <h3>Student orientation at PVPIT – Sangli</h3>
                            {/* <h5>Date: 26th April, 2018.</h5>
                            <h5>Venue: </h5> */}
                            <div className="gallery-slider">
                            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="4.jpg"
                     alt="Another alt text"/>

        </div>
            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="5.jpg"
                     alt="Another alt text"/>

        </div>

            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                    <img className="img-thumbnail"
                         src="6.jpg"
                         alt="Another alt text"/>
   
            </div>
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
                            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="7.jpg"
                     alt="Another alt text"/>

        </div>
            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="8.jpg"
                     alt="Another alt text"/>

        </div>

            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="9.jpg"
                     alt="Another alt text"/>

        </div>
                            </div>
                        </div>

                        <div className="events-section">
                            <h3>Punyashlok Ahilyadevi Holkar Solapur University</h3>

                            <div className="gallery-slider">
                            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="1.jpg"
                     alt="Another alt text"/>

        </div>
            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="2.jpg"
                     alt="Another alt text"/>

        </div>

            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="3.jpg"
                     alt="Another alt text"/>

        </div>
                            </div>
                        </div>


                        <div className="events-section">
                            <h3>Gondawana University MoU</h3>

                            <div className="gallery-slider">
                            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="1.jpg"
                     alt="Another alt text"/>

        </div>
            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="2.jpg"
                     alt="Another alt text"/>

        </div>

            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="3.jpg"
                     alt="Another alt text"/>

        </div>
                            </div>
                        </div>

                        <div className="events-section">
                            <h3>Datapanthy</h3>
                            <h5>R Language FREE  MOOC in association with Computer Science Department Mumbai University in charge Dr Prof Ambuja Salgaonkar.</h5>
                            <h5>Date: 10th May 2019</h5>
                            <h5><b>Register:</b> <a href="https://develearn.in/datapanthy" target="_blank" rel="noopener noreferrer">https://develearn.in/datapanthy</a>.</h5> 
                            <div className="gallery-slider">
                            <div class="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img className="img-thumbnail"
                     src="1.jpg"
                     alt="Another alt text"/>

        </div>
            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img class="img-thumbnail"
                     src="2.jpg"
                     alt="Another alt text"/>

        </div>

            <div className="col-lg-4 col-md-3 col-xs-6 thumb">
                
                <img class="img-thumbnail"
                     src="3.jpg"
                     alt="Another alt text"/>

        </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-12 col-xl-1"></div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
        )
 export default Events;






 *{
	margin:0px;
	padding:0px;
}

h1{
	font-size:44px;
	font-weight:400;
	letter-spacing:0.2px;
}

ul.navbar-nav li {
    margin: 0px 20px;
}
ul.navbar-nav li a{
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 24px;
	text-transform: uppercase;
	color: #fff;
	position: relative;
	padding-left: 15px !important;
    padding-right: 15px !important;
}
ul.navbar-nav li a::before
{
	content:"";
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	border-radius:50px; 
	padding:5px; 
	background:linear-gradient(to bottom, #00D1FF, #FDA50F); 
	-webkit-mask: 
	   linear-gradient(#fff 0 0) content-box, 
	   linear-gradient(#fff 0 0);
	-webkit-mask-composite: destination-out; 
	mask-composite: exclude; 
}
.homepage .landing-sections{
	min-height: 737px;
	max-height: 737px;
	position: relative;
}
.homepage .landing-sections .content-section {
    position: relative;
    height: 737px;
}
.homepage .landing-sections::before {
    content: '';
    position: absolute;
	bottom: 0;
	background: url("./top.png") no-repeat;
	left: 0;
	height: 100%;
	width: 100%;
	background-size: 100%;
}
.content-section{
	max-width: 1253px;
	margin: 0 auto;
	position: relative;
}

.contents {
	width: 500px;
    display: flex;
    justify-content: center;
    height: 60vh;
    flex-direction: column;
    align-items: flex-start;
	text-align: left;
	position: relative;
}
.homepage .contents::after{
	position: absolute;
	content: "";
	background: url("./people.png") no-repeat;
	position: absolute;
    content: "";
    right: -45vw;
    bottom: -65px;
    width: 500px;
    height: 100%;
    opacity: 0.4;
}
.contents h1{
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	font-size: 48px;
	color: #fff;
	line-height: 1.2;
}.contents h1 span{
	color: #FFB905
}
.custom-btn{
	min-width: 200px;
    height: 60px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
	line-height: 2.4;
	text-align: center;
	border-radius: 45px;
	text-decoration:none !important;
	text-transform: capitalize;
	padding: 0px 35px;
}
a:hover{
	color: inherit;
}
.pa{
	
}
.btn-container {
    display: flex;
    justify-content: center;
}
.btn-container .custom-btn:nth-child(1){
	margin-right: 40px;
}
.class-room {
    position: absolute;
	/*top:0;*/
	bottom: -50px;
    left:0;
    right:0;
    width:100%;
    background: #fff;
    max-width: 1253px;
	padding: 30px;
	border-radius: 50px;
}
.class-room::after{
	content:"";
	position: absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	border-radius:50px; 
	padding:5px; 
	background:linear-gradient(to bottom, #00D1FF, #FDA50F); 
	-webkit-mask: 
	   linear-gradient(#fff 0 0) content-box, 
	   linear-gradient(#fff 0 0);
	-webkit-mask-composite: destination-out; 
	mask-composite: exclude; 
}
.class-room h2{
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 26px;
	line-height: 32px;
}
.class-room p{
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
	line-height: 22px;
	font-weight: 400;	
}
.black{
	color: #000;
	position: relative;

}

.black::before{
	content:"";
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	border-radius:50px; 
	padding:5px; 
	background:linear-gradient(to right, #00D1FF, #FDA50F); 
	-webkit-mask: 
	   linear-gradient(#fff 0 0) content-box, 
	   linear-gradient(#fff 0 0);
	-webkit-mask-composite: destination-out; 
	mask-composite: exclude; 
}
.sections h2{
	font-family: 'Montserrat', sans-serif;
	font-size: 26px;
	font-weight: 500;

}
.sections {
	margin-top: 100px;
}
.short-content{
	width: 732px;
	margin: 0 auto;
	
}
.sections p{
	font-family: 'Montserrat', sans-serif;
font-size: 16px;
}

.mb-75{
	margin-bottom: 75px;
}
.grid-section {
    display: flex;
    align-items: center;
    justify-content: center;
}
.image-container {
    width: 487px;
    flex: 0 0 478px;
    margin-right: 70px;
}
.grid-content-container {
    display: flex;
    align-items: center;
}
.custom-col span {
    margin-bottom: 40px;
    display: flex;
}
.custom-col {
    width: 275px;
}
.mr-40
{margin-right: 40px;}
.mt-127{
	margin-top: 127px;
}
.course {
    width: 316px;
	position: relative;
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border-image-source: linear-gradient(to top, #00D1FF, #FDA50F);
	color: #000;
}

.course p {
	margin-top: 10px;
}
.courses {
    display: flex;
	justify-content: space-between;
	margin-top: 170px;
}
.course img {
    width: 247px;
    margin-top: -100px;
    background: #fff;
}
.color-border{
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border-image-source: linear-gradient(to top, #00D1FF, #FDA50F);
}
.testimonial img {
    position: absolute;
    top: -75px;
    left: 50px;
}
.testimonial{
	position: relative;
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border-image-source: linear-gradient(to top, #00D1FF, #FDA50F);
	color: #000;
	width:547px;
	padding: 212px 30px 15px;
	margin-right: 40px;
	flex: 0 0 547px;
}
.testimonials {
	display: flex;
	width: 100%;
	padding-top: 150px;
}
.partners {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.partner{
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border-image-source: linear-gradient(to top, #00D1FF, #FDA50F);
	padding: 10px;
}
.partner img{
	max-width: 100% ;
}

.footer{

}
.footer-inner{
	height: 544px;
	background: #01002E;
}
.footer-copyright{
	height: 71px;
	background: black;
}
a.custom-btn.pa.black {
    color: #fff;
}
a.custom-btn.black.d-block {
    margin-top: 40px;
    float: right;
}
ul.social {
    list-style-type: none;
    display: flex;
    padding: 5px;
    margin-left: auto;
	margin: 0;
	align-items: center;
}
ul.social li {
    margin: 0px 10px;
}
.topnav {
    display: flex;
    justify-content: flex-end;
}
ul.social li a {
    color: #fff;
    display: flex;
    align-items: center;
}
span.mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 10px;
}
.landing-sections {
	min-height: 250px;
	background: url("./top-bg.png") no-repeat;
	background-size: 100% 250px !important;
}
.aboutus-top-sections {
    width: 1100px;
	margin: 0 auto;
	position: relative;
}
img.aboutus-top {
	position: absolute;
    left: -125px;
    top: -250px;
    z-index: -3;
}
img.aboutus-bottom {
	position: absolute;
    right: -124px;
    bottom: -210px;
    z-index: -3;
}
.content-box p {
    max-width: 700px;
    margin: 0 auto;
}
.content-box h2{
	margin-bottom: 18px;
}
.content-box {
	background: #fff;
	padding: 60px 100px;
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border-image-source: linear-gradient(to top, #00D1FF, #FDA50F);
}
.team-container {
	width: 1114px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
}
.team {
	width: 316px;
    height: 370px;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to top, #00D1FF, #FDA50F);
    position: relative;
	padding: 110px 50px 30px;
	margin-top: 200px;
}
.team-pic{
    position: absolute;
    width: 200px;
    height: 200px;
    border: 5px solid #FDA50F;
    top: -30%;
    border-radius: 50%;
    left: 16%;
    background: #fff;
}
.h-100{
	height: 100px !important;
}
.navbar-toggler {
    background-color: #fff;
    border: 1px solid;
    color: #fff;
}
@media only screen and (max-width: 991px) {
	ul.navbar-nav li a::before{
		display: none
	}ul.navbar-nav li a{
		color: #000;
	}
	div#navbarNav {
		background: #fff;
		z-index: 2;
		border-radius: 25px;
		position: absolute;
		width: 100%;
		top: 90px;
	}
	.testimonials {
		overflow: auto;
	}
	.content-section {
		padding: 0px 15px;
	}
	.contents {
		height: auto;
	}
	.contents h1{
		font-size: 40px;
	}
	.homepage .landing-sections .content-section,
	.homepage .landing-sections {
		height: 55vh;
		max-height: 55vh;
		min-height: 55vh;
	}
	.class-room {
		left: 10%;
		width: 80%;
	}
	.sections {
		margin-top: 50px;
	}
	.grid-section {
		flex-direction: column;
	}

	.mt-127{
		margin-top: 30px;
	}
	.grid-content-container {
		justify-content: center;
	}
	.custom-col {
		width: 40%;
		margin-top: 20px;
	}
	.courses {
		flex-direction: column;
		align-items: center;
	}
	.course {
		width: 50%;
		margin-top: 160px;
	}
	.course:nth-child(1) {
		margin-top: 50px;
	}
	a.custom-btn.black.d-block {
		width: 280px;
		margin-left: auto;
		margin-right: auto;
		float: none;
	}
	.aboutus-top-sections {
		width: 70%;
	}
	.team-container {
		width: 90%;
		justify-content: space-around;
	}
  }
  @media only screen and (max-width: 797px) {
	.contents {
		width: 50%;
	}
	.content-box{
		padding: 15px;
	}
	.homepage .contents::after {
		
		right: -45vw;
		bottom: -72px;
		width: 50%;
		opacity: 0.4;
		width: 50vw;
		height: 300px;
	}
	.homepage .landing-sections::before{
		background-size: cover;
	}
	.image-container {
		width: 100%;
	}
	.short-content {
		width: 80%;
	}
	.landing-sections{
		background-size: cover;
	}
  }
  @media only screen and (max-width: 550px) {
	.mb-75 {
		margin-bottom: 25px;
	}
	.aboutus-top-sections {
		width: 90%;
	}
	
	.team{
		padding: 110px 30px 30px;
	}
	.aboutus-top-sections img {
		display: none;
	}
	.contents {
		width: 100%;
		text-align: center;
		align-items: center;
		margin-top: 20px;
	}
	.homepage .contents::after {
		right: 0;
		bottom: -150px;
		width: 50%;
		opacity: 0.4;
		width: 88vw;
		height: 300px;
		z-index: -1;
	}
	.btn-container {
		flex-direction: column;
	}
	.btn-container .custom-btn:nth-child(1) {
		margin-bottom: 15px;
		margin-right: 0px;
	}
	.homepage .landing-sections .content-section, .homepage .landing-sections {
		height: 65vh;
		max-height: 65vh;
		min-height: 65vh;
	}
	.image-container {
		width: 100%;
		margin: 0;
	}
	.course {
		width: 90%;
	}
	img{
		max-width: 100%;
	}
	.partners {
		flex-direction: column;
	}
	.partner {
		width: 60%;
		margin-bottom: 20px;
	}
  }




  


  .learning .landing-sections{
	min-height: 737px;
	max-height: 737px;
	position: relative;
}
.learning .landing-sections .content-section {
    position: relative;
    height: 737px;
}
.learning .landing-sections::before {
    content: '';
    position: absolute;
	bottom: 0;
	background: url("./learning.svg") no-repeat;
	left: 0;
	height: 100%;
	width: 100%;
	background-size: 100%;
}

.embed-responsive{
	width: 905px;
	height: 662;
}
.video-box{
	margin-left: 90px;
}

.short-contentD{



left: -1%;
top: 30%;
height: auto;
}







.map-height{
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border-image-source: linear-gradient(to top, #00D1FF, #FDA50F);
}

.form-group {
    margin-bottom: 1rem;
}

.contact .form-group label {
    font-family: Open Sans,sans-serif;
    color: #000;
    font-weight: 400;
    font-size: 18px !important;
    margin-bottom: 15px;
    /* display: inline-block; */
}
label{
 font-size: 18px !important;
}

.contact .form-group .custom-form-control {
    font-family: Open Sans,sans-serif;
    background-color: #e5e5e5;
 
    font-size: 16px;
    padding: 26px 20px;
	border-color: linear-gradient(to top, #00D1FF, #FDA50F);
    border-radius: 20px;
	
	
}


.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  
    background-color: #fff;
    background-clip: padding-box;
	
	border: linear-gradient(to top, #00D1FF, #FDA50F);
  

	border-image-slice: 1;
	
}



.contact .form-btn-group .select-course {
    font-family: Open Sans,sans-serif;
    font-weight: 400;
    display: inline-block;
    font-size: 17px;
    list-style: none;
    padding: 8px 35px;
    text-align: center;
  
    margin-bottom: 15px;
    margin-right: 15px;
    cursor: pointer;

}

.text-left{
text-align: start !important;
}



.btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    background-color:  #0f94d5;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border: linear-gradient(to top, #00D1FF, #FDA50F);
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}



.sub{
	background-color: #fff !important;
	border: none;
	font-size: 20px;
}






.events .events-section .gallery-slider {
	padding-top: 30px;
	padding-bottom: 10px;
  }
  
  .events .events-section .gallery-slider .slide-img {
	height: 300px;
	margin-bottom: 0;
  }
  
  @media (max-width: 767px) {
	.events .events-section {
	  padding: 10px 0px 5px;
	}
	.events .events-section h3 {
	  font-size: 18px;
	  margin-bottom: 5px;
	  text-align: left;
	}
	.events .events-section h5 {
	  font-size: 14px;
	}
	.events .events-section .gallery-slider {
	  padding-top: 20px;
	  padding-bottom: 10px;
	}
	.events .events-section .gallery-slider .slide-img {
	  height: 150px;
	  margin-bottom: 0;
	}
  }
  
  @media (max-width: 576px) {
	.events .events-section .gallery-slider {
	  padding-bottom: 25px;
	}
	.events .events-section .gallery-slider .slide-img {
	  height: 120px;
	  margin-bottom: 0;
	}
  }
  
  .slick-arrow {
	z-index: 1;
  }
  
  .slick-list {
	z-index: 0;
  }
  
  .slick-prev:before {
	font-size: 50px;
	line-height: 0;
	color: #0F94D5;
	position: relative;
	left: 25px;
	opacity: 1;
  }
  
  .slick-next:before {
	font-size: 50px;
	line-height: 0;
	color: #0F94D5;
	position: relative;
	right: 55px;
	opacity: 1;
  }
  
  @media (max-width: 635px) {
	.slick-prev, .slick-next {
	  top: 50%;
	}
	.slick-prev:before {
	  font-size: 20px;
	}
	.slick-next:before {
	  font-size: 20px;
	  right: 26px;
	}
  }
  
  .event-top-content {
	margin-bottom: 5px;
	padding: 20px 15px 20px;
	border-bottom: 1px solid #ddd;
  }
  
  .event-top-content h3 {
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	font-weight: 500;
	color: #000;
	padding: 10px 0;
	margin-bottom: 20px;
	text-align: left;
  }
  
  .event-top-content p {
	font-family: 'Open Sans', sans-serif;
	color: #707070;
	font-size: 17px;
	font-weight: 400;
	margin-bottom: 15px;
	text-align: left;
  }
  
  @media (max-width: 767px) {
	.event-top-content {
	  margin-bottom: 5px;
	  padding: 0 0 10px;
	}
  }




  .img-thumbnail{

	

	border: 5px solid;
	border-image-slice: 1;
	border-width: 2px;
	border-image-source: linear-gradient(to top, #00D1FF, #FDA50F);
  }

  
  .events .events-section h3,h5{
	  text-align: left;
  }






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
