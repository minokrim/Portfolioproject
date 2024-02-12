import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import image from "./Assets/website image.JPG"
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
import "./css/about.css"
function About(){
    return <div>
        <Navbar/>
        <main className="aboutme">
            <section className="intro">
                <img src={image} alt=""/>
                <p>My name is Kareem Alameen, i am a front-end developer who focuses on writing clean, elegant, and efficient code. I embrace challenges as opportunities to hone my skills and expand my horizons. With each line of code, I strive to push boundaries and unlock new possibilities. I'm eager to Work, collaborate, learn from others, and contribute my unique perspective to the ever-evolving tech community. 
                </p>
            </section>
            <section className="skills_tools">
                <h1>Skills & Tools</h1>
                <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                    <img src={image7} alt="" />
                    <img src={image8} alt="" />
                    <img src={image9} alt="" />
                    <img src={image10} alt="" />
                </div>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                <div id="logos">
                    <figure>
                        <img src={logo1} alt="" id="caleb"/>
                        <figcaption>Caleb University <br/> B.Sc Computer SCience <br/> 2018-2022</figcaption>
                    </figure>
                    <figure>
                        <img src={logo2}alt=""/>
                        <figcaption>ZKTeco West Africa <br/>Communications and Content Manager <br/>2022-2023</figcaption>
                    </figure>
                    <figure>
                        <img src={logo3} alt=""/>
                        <figcaption>N.Y.S.C <br/> Youth Corper <br/>2022-2023</figcaption>
                    </figure>
                    <figure>
                        <img src={logo4} alt=""/>
                        <figcaption>Kreativstorm <br/>front-end Trainee<br/>2024</figcaption>
                    </figure>
                </div>
            </section>
        </main>
        <Footer/>
    </div>

}
export default About 