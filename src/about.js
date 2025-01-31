import React, { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import me from "./Assets/me.jpg"
import image1 from "./Assets/htmllogo-removebg-preview.png"
import image2 from "./Assets/csslogo-removebg-preview.png"
import image3 from "./Assets/JavaScriptlogo.png"
import image4 from "./Assets/jquerylogo-removebg-preview.png"
import image5 from "./Assets/reactlogo-removebg-preview.png"
import image6 from "./Assets/ChromeLogo-removebg-preview.png"
import image7 from "./Assets/githublogo-removebg-preview.png"
import image8 from "./Assets/capcutlogo-removebg-preview.png"
import image9 from "./Assets/Canvalogo-removebg-preview.png"
import image10 from "./Assets/vscodelogo-removebg-preview.png"
import logo1 from "./Assets/caleb-university-logo101485-new-removebg-preview.png"
import logo2 from "./Assets/zkteco_logo-removebg-preview.png"
import logo3 from "./Assets/NYSC_LOGO.svg-removebg-preview.png"
import logo4 from "./Assets/kreativstorm_logo-removebg-preview.png"
import mongodb from "./Assets/monodb.png"
import express from "./Assets/express.png"
import figma from "./Assets/figma.png"
import docker from "./Assets/docker.png"
import jest from "./Assets/jest.png"
import react_test from "./Assets/react-test.png";
import wordpress from "./Assets/wordpress.png"
import postgres from "./Assets/postgres.png"
import nodejs from "./Assets/nodejs.png"
import jira from "./Assets/jira.png"
import office from "./Assets/office.png"
import google from "./Assets/google.png"
import php from "./Assets/php.png"
import trent from "./Assets/trent.png"
import cysd from "./Assets/cysd.png"
import yuvoice from "./Assets/yuvoice.png"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./css/about.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(){
    const [viewMore,setViewMore]=useState(false)
    AOS.init();

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
    return <div>
        <Navbar/>
        <main className="aboutme">
            <section className="intro">
                <img src={me} alt="" loading="lazy"/>
                <section className="aboutparagraph">
                <h3>Who am i?</h3>
                <p className="paragraph1">I'm Kareem Alameen — a Software Engineer passionate about building scalable, efficient, and user-centric solutions.
                </p>
                <p className="paragraph3">My tech stack includes:</p>
                <ul className="stack">
                    <li>Front-End: HTML5, CSS3, JavaScript (ES6+), React.js</li>
                    <li>Back-End: Node.js, Express.js</li>
                    <li>Databases: MongoDB, PostgreSQL</li>
                    <li>Tools: Git, RESTful APIs, and more.</li>
                </ul>
                <p className="paragraph2">
                Beyond development, I have a strong foundation in content strategy and digital engagement, producing technical tutorials, writing insightful blogs, and driving impactful campaigns to enhance online presence.
                </p>
                <p className="paragraph4">Let’s collaborate and build something exceptional!</p>
                </section>
            </section>
            <section className="skills_tools_container">
                <section className="skills_tools">
                <h1>Skills & Tools</h1>
                <div className="skill_img">
                    <img src={image1} alt="html logo" title="HTML5"/>
                    <img src={image2} alt="css logo" title="css"/>
                    <img src={image3} alt="javascript logo" title="javascript"/>
                    <img src={php} alt="javascript logo" title="php"/>
                    <img src={image4} alt="j-query logo" title="j-query"/>
                    <img src={image5} alt="react logo" title="react"/>
                    <img src={nodejs} alt="node logo" title="node.js"/>
                    <img src={express} alt="express logo" title="express.js"/>
                    <img src={postgres} alt="postgres logo" title="postgres Db"/>
                    <img src={mongodb} alt="mongo db logo" title="mongo db"/>
                    <img src={figma} alt="figma logo" title="fimag"/>
                    {viewMore && (
                    <div>
                    <img src={image10} alt="vs code logo" title="vs code" />
                    <img src={jest} alt="jest logo" title="jest"/>
                    <img src={react_test} alt="react-test logo" title="react-testing library"/>
                    <img src={wordpress} alt="wordpress logo" title="wordpress"/>
                    <img src={image6} alt="chrome logo" title="chrome"/>
                    <img src={image7} alt="git logo" title="git"/>
                    <img src={image8} alt="capcut logo" title="capcut"/>
                    <img src={image9} alt="canva logo" title="canva"/>
                    <img src={docker} alt="docker logo" title="docker"/>
                    <img src={jira} alt="jira logo" title="jira"/>
                    <img src={office} alt="office logo" title="office"/>
                    <img src={google} alt="google logo" title="google"/>
                        </div>
                    )}
                </div>
                </section>
                {viewMore?<button onClick={()=>setViewMore(false)} className="btn">Show Less</button>:<button onClick={()=>setViewMore(true)} className="btn">show More</button>}
            </section>
            <section className="experience">
                <h2>Experience</h2>
                    <Carousel responsive={responsive} className="carousel" swipeable={true} infinite={true} minimumTouchDrag={10} autoPlay={true} autoPlaySpeed={2000} arrows={false}>
                        <figure>
                            <img src={logo1} alt="" id="caleb"/>
                            <figcaption>Caleb University <br/> B.Sc Computer SCience <br/> 2018-2022</figcaption>
                        </figure>
                        <figure>
                            <img src={logo2} alt=""/>
                            <figcaption>ZKTeco West Africa <br/>Communications and Content Manager <br/>2022-2023</figcaption>
                        </figure>
                        <figure>
                            <img src={logo3} alt=""/>
                            <figcaption>N.Y.S.C <br/> Youth Corper <br/>2022-2023</figcaption>
                        </figure>
                        <figure>
                            <img src={trent} alt="trent logo"/>
                            <figcaption>Trent university <br/>M.sc Applied Modelling<br/>2024-2025</figcaption>
                        </figure>
                        <figure>
                            <img src={logo4} alt="kreativstorm logo"/>
                            <figcaption>Kreativstorm <br/>Front-end Trainee<br/>2024</figcaption>
                        </figure>
                        <figure>
                            <img src={cysd} alt="cysd logo"/>
                            <figcaption>CYSD cameroon <br/>Fullstack Developer Volunteer<br/>2024</figcaption>
                        </figure>
                        <figure>
                            <img src={yuvoice} alt=""/>
                            <figcaption>Yuvoice <br/>Wordpress Developer Volunteer<br/>2024</figcaption>
                        </figure>
                      </Carousel>;

            </section>
        </main>
        <Footer/>
    </div>

}
export default About 