import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import contentimg from "../Assets/roadmap.jpg"
import port1 from "../Assets/port1.JPG"
import port2 from "../Assets/port2.JPG"
import port3 from "../Assets/port3.png"
import port4 from "../Assets/port4.JPG"
import port5 from "../Assets/port5.JPG"
import port6 from "../Assets/port6.JPG"
import port7 from "../Assets/port7.jpg"
import port8 from "../Assets/port8.jpg"
import link from "../Assets/link1.png"

import "./content.css"
import { Link } from 'react-router-dom';
export default function Content(){
    return <div className="contentBody">
        <Navbar/>
        {/* <section className="designs">
            <h1 className="designheader">DESIGNS</h1>
            <div className="graphics">
            <section className="designLeft">
                <img src={port5} alt="" />
                <img src={port7} alt="" />
                <img src={port8} alt="" />
            </section>

            <section className="designRight">
            <section className="designtop">
            <div className="design1">
            <img src={port3} alt="" />
            <h4>
            My designs feature a modern, clean aesthetic that emphasizes clarity and visual appeal. By using a cohesive color palette, high-quality imagery, and innovative techniques, I create work that captivates audiences and drives action.
            </h4>
            </div>

            <div className="design2">
            <img src={port6} alt="" />
            <img src={port4} alt="" />
            </div>
            </section>

            <div className="design3">
            <img src={port1} alt="" />
            <img src={port2} alt="" />
            </div>
            </section>
            </div>
        </section> */}

        <section className="videos">
            <section className="videossec">
            <div className="framesec framsec1">
            <iframe src="https://www.youtube.com/embed/XZnRISVYNi8?start=57" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="frame frame1" title="vid1"></iframe>

            <iframe src="https://www.youtube.com/embed/1_u4fRBCc8Q?si=rDnV6XDQZLfEOkUD" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="frame frame2" title="vid2"></iframe>
            </div>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/1vJd3qFnnrs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="frame frame4" title="vid3"></iframe>

            <div className="framesec framsec1">
            <iframe src="https://www.youtube.com/embed/MpRFvoGLSwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="frame frame5" title="vid4"></iframe>

            <iframe src="https://www.youtube.com/embed/LJmin0wA24Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="frame frame3" title="vid5"></iframe>
            </div>
            </section>
        </section>

        <section className="blog">
            <h2>BLOGS</h2>
            <div className="blog1 blogs">
                <section>
                    <p>01</p>
                    <h3>Securing Your Home with the Right CCTV Camera Positioning</h3>
                </section>
                <h4>
                In this blog post, I discuss the optimal placement of CCTV cameras to enhance home security, recommending strategic locations like entry points, off-street windows, parking spaces, common areas, and stairways for comprehensive coverage.
                </h4>
                <div className="linkcontainer">
                <Link to="https://www.zkteco-wa.com/blog/securing-your-home-with-the-right-cctv-camera-positioning/" className="link" target="_blank"> READ <img src={link} alt="" /></Link> 
                </div> 
                <hr />
            </div>

            <div className="blog2 blogs">
                <section>
                    <p>02</p>
                    <h3>5 Ways to Guarantee your Child's Safety using Smart Home Security Devices</h3>
                </section>
                <h4>
                In this blog post, I outlined five key ways smart home security devices can enhance child safety, including improved surveillance, access control, intrusion detection, environmental monitoring, and home automation.
                </h4>
                <div className="linkcontainer">
                <Link to="https://www.zkteco-wa.com/blog/5-ways-to-guarantee-your-child's-safety-using-smart-home-security-devices/" className="link" target="_blank"> READ <img src={link} alt="" /></Link> 
                </div> 
                <hr />
            </div>

            <div className="blog3 blogs">
                <section>
                    <p>03</p>
                    <h3>Exploring the Differences Between Outdoor and Semi-Outdoor Devices</h3>
                </section>
                <h4>
                In this blog post, I compared outdoor and semi-outdoor biometric devices, highlighting differences in durability, visibility, environmental protection, and cost, to guide users in selecting the appropriate device for various settings.
                </h4>
                <div className="linkcontainer">
                <Link to="https://www.zkteco-wa.com/blog/exploring-the-differences-between-outdoor-and-semi-outdoor-devices/" className="link" target="_blank"> READ <img src={link} alt="" /></Link> 
                </div>
                <hr /> 
            </div>

            <div className="blog4 blogs">
                <section>
                    <p>04</p>
                    <h3>Choosing Between Angular and React for Modern Web Development</h3>
                </section>
                <h4>
                In this blog post I provided a comprehensive comparison between Angular and React for modern web development. I explained the fundamental of frontend tools like HTML, CSS, and JavaScript, and then dived into how Angular and React address different development needs.
                </h4>
                <div className="linkcontainer">
                <Link to="https://medium.com/@ayomidekareem563/choosing-between-angular-and-react-for-modern-web-development-682c0b065d87" className="link" target="_blank"> READ <img src={link} alt="" /></Link>  
                </div>
                <hr />
            </div>
        </section>

        {/* <section className="contentSec1">
            <h3>CONTENT CREATION JOURNEY</h3>
            <img src={contentimg} alt="" />
        </section> */}
        <Footer/>
    </div>
}