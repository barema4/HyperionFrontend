import React from "react";
import './main.css'
import mainLogo from '../assets/images/beginner-php-fundamentals.png';
import layer2 from '../assets/images/layer-115.png';
import layer1 from '../assets/images/layer-114.png'
const WebTrial = () => {
    return (<div>
        <div className="row top-inform">
            <div className="col-md-6 left">
                <div className="row fire">
                    <div className="col-md-3 sport">
                        <img src={mainLogo} alt="fireSpot" />

                    </div>
                    <div className="col-md-9 web">
                        <h3>Web Development Bootcamp Trial</h3>
                        <button className="btn btn-first ">Continue your trial {'>'}</button>
                    </div>
                </div>
                <div className="complete">
                    <h4>Your Progress(1/4 complete)</h4>
                </div>

                <div className="row">
                    <div className="col-md-11 industry">
                        <button className="btn btn-first col-md-12">Industry knowledge 1</button>
                        <button className="btn btn-second col-md-12">Industry knowledge 2</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11 industry2">
                        <button className="btn btn-second col-md-12">HTML Basics</button>
                        <button className="btn btn-second col-md-12">Your First PHP Script</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4 right">
                <div className="middle">
                    <div className="coding" >
                        Your coding jounery
                    </div>
                    <div className="row">
                        <div className="col-md-1 one">
                            1
                        </div>
                        <div className="col-md-11 programs">
                            Total programs written

                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-1 one">
                            4
                        </div>
                        <div className="col-md-11 programs">
                            Total code reviews

                        </div>
                    </div>

                </div>



                <div className="more">
                    <div className="coding">Get More Information</div>
                    <p className="questions">We're already to help with questions you may have about our Bootcamps and Mentor Support</p>
                </div>
                <div className="row right-info">
                    <div className="col-md-6">
                        <button className="btn btn-second col-md-12">Book a call</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-second col-md-12">Join an info session</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row footer">
            <div className="col-md-6">
                <h3 className="coding">Trial another Bootcamp</h3>
                <div className="row">
                    <div className="col-md-6 mobile-btn">
                        <img src={layer2} alt="fireSpot" width="90" height="60" />
                        <button className="btn mobile-btn-buttons">Mobile Developer Bootcamp</button>
                    </div>
                    <div className="col-md-6 mobile-btn">
                        <img src={layer1} alt="fireSpot" width="90" height="60"/>

                        <button className="btn mobile-btn-buttons">Software Engineer Bootcamp</button>
                    </div>

                </div>
            </div>
            <div className="col-md-4">
                <h3 className="coding">Upgrade to the Full Bootcamp</h3>
                <p className="programs">Our next cohort starts 3 January 2018.</p>
                <button className="btn btn-footer">Reserve your sport</button>
            </div>
        </div>

    </div>);
}

export default WebTrial;
