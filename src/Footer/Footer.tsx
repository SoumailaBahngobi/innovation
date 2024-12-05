// Footer.js
import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import logo from '../../asset/logo.png';
// import './App.css';
// import './index.css';

const Footer = () => {
    return (
        <div className="mon_footer" >
            <footer className="gray-gray-400 text-white py-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="container">
                        <div className="footer-container">



                            <div className="footer-center">
                                <h3 className="container mx-auto flex justify-between items-center p-4">About</h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.  <br /> Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.</p>
                            </div>
                            <div className="footer-center">
                                <h3 className="container mx-auto flex justify-between items-center p-10">SOCIAL</h3>
                                {/* Liens sociaux */}
                                <div className="flex space-x-10">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-500"
                                    >
                                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400"
                                    >
                                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-500"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                </div>
                            </div>
                            <div className="footer-center" id="contact">
                                <h3 className="container mx-auto flex justify-between items-center p-10">Contact Us</h3>
                                <div>
                                    <span>
                                        <i className="fa fa-map-marker-alt" />
                                    </span>
                                    500 Terry Francois St.

                                </div>
                                <div>
                                    <span>San Francisco,</span>
                                </div>
                                <div>
                                    <span>
                                        Extra Crunch Terms
                                    </span>

                                </div>
                                <div>
                                    <span>
                                        CA 94158
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        info@example.com
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        +1-410-555-0134 |
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        contact@example.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <hr />
            {/* <div className="copyright">
                Copyrightto2024 Tech News
            </div> */}
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* bg-gray-600 */}
                <div className="container mx-auto px-4 flex justify-between items-center py-4">
                    {/* <div className="container mx-auto px-4 flex justify-between items-center py-4"> */}
                    { /* Logo */}
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p className="text-white text-lg md:text-xl">Copyright © 2024 Home Decor | Powered by Home Decor</p>
                    { /* Menu */}
                    <div className=" flex space-x-16 relative flex h-16 items-center justify-between">
                        <a href="#About Us" className="text-white text-lg md:text-xl">About Us</a>
                        <a href="#Living Room" className="text-white text-lg md:text-xl">Living Room</a>
                        <a href="#Kitchen" className="text-white text-lg md:text-xl">Kitchen</a>
                        <a href="#Outdoors" className="text-white text-lg md:text-xl">Outdoors</a>
                        <a href="#Contact" className="text-white text-lg md:text-xl">Contact</a>
                    </div>

                    { /* Hamburger menu (mobile) */}

                </div>
            </nav>
        </div>
    );
};

export default Footer;
