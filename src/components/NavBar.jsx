import React from "react";
import './main.css'
import heading1 from '../assets/images/url.png'
import pic from '../assets/images/student.png'
const NavBar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <div id="navbarNav">
                <ul class="navbar-nav nav-data">
                    <li class="nav-item">
                        <img class="nav-link" src={heading1} alt="fireSpot" />
                        <a class="nav-link" href="#">Full Stack Web developer Bootcamp</a>
                    </li>
                    <li class="nav-item nav-right">
                        <img class="nav-link" src={pic} alt="fireSpot" size="14px" height="34px" />
                        <a class="nav-link profile" href="#">
                            Profile
                        </a>
                        <div className="dropdown-profile">
                            <ul>
                                <li>Edit Profile</li>
                                <li>Log Out</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;