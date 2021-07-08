import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage'
import Aboutus from './components/Aboutus'
import Courses from './components/Courses'
import XRLearning from './components/XRLearning'
import Events from './components/Events'
import ContactUs from './components/ContactUs'
import Thanks from './components/Thanks'
import Confirm from './components/Confirm'

function App() {
    return (<
        div className="App" >
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/aboutus" component={Aboutus} />
                <Route path="/course" component={Courses} />
                <Route path="/xr-learning" component={XRLearning} />
                <Route path="/events" component={Events} />
                <Route path="/contacts" component={ContactUs} />
                <Route path="/Thanks/:id" component={Thanks} />
                <Route path='/Confirm' component={Confirm} />
            </Switch>
        </BrowserRouter>
    </div>
    );
}

export default App;