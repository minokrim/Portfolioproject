import React from "react";
import p2 from "../Assets/p2.png"
import p3 from "../Assets/p3.png"
import "./works.css"
import Navbar from "../navbar";
import Footer from "../footer";
import arrow from "../Assets/arrow.png"
import git from "../Assets/github.png"
import { Link } from 'react-router-dom';
import figma from "../Assets/figma.png"
import p5 from "../Assets/cysdl.png"
import ecommerce from "../Assets/ecommerce1.png"
import restaurant from "../Assets/restaurant2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Works(){
    AOS.init();
    return <div className="workBody">
        <Navbar/>
        <section>

        <section className="proj cysdProj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
        <div className="imgborder">
            <img src={p5} alt="" className="proj2img"/>
            </div>
            <div className="detailSec">
            <h1>CYSD CAMEROON</h1>
            <h3>
I designed and developed a mission-driven landing page with a focus on encouraging donations, featuring a prominent donation button and responsive layouts to provide a seamless user experience across desktop, tablet, and mobile devices. Built using the same tech stack of React.js, Node.js/Express.js, and PostgreSQL, the platform integrates the PayPal Donation API for secure and seamless transaction processing. Additionally, I incorporated the Mailchimp API for efficient community engagement, allowing targeted email campaigns, and Nodemailer for streamlined communication, sending automated receipts and thank-you messages to donors. This combination of features ensures an intuitive, secure donation process while fostering donor engagement and retention.</h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" to="https://minokrim.github.io/cysd/#/getinvolved" target="_blank">VISIT</Link>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com/minokrim/cysd" target="_blank">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>

        <section className="proj1 proj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
            <div className="imgborder">
            <img src={p2} alt="" className="proj1img" data-aos="flip-left"/>
            </div>
            <div className="detailSec">
            <h1>THE ANIME</h1>
            <h3>
            For my anime project, I employed a mix of cutting-edge web development technologies to craft a dynamic and visually captivating application. Central to the project was React, a which enabled me to construct a seamless and interactive user interface effortlessly. I utilized CSS for custom styling and leveraged Bootstrap for its comprehensive responsive design capabilities. Integrating the Jikan API  allowed me to fetch and present detailed anime information, offering users access to an extensive database of their favorite shows efficiently and accurately. Overall, this project was a delightful fusion of my passion for anime and coding.
            </h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" to="https://minokrim.github.io/animeproject/" target="_blank">VISIT</Link>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com/minokrim/animeproject" target="_blank">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>

        <section className="proj2" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
        <div className="imgborder">
            <img src={p3} alt="" className="proj2img"/>
            </div>
            <div className="detailSec">
            <h1>UNIQUE STORE</h1>
            <h3>
            I developed a fully functional e-commerce website dedicated to selling sweaters, meticulously implementing the provided UI/UX design to create a seamless shopping experience. The website features a comprehensive product catalog, complete with detailed descriptions and high-quality images, allowing users to easily browse and find their desired items. The shopping cart system was robustly built to enable users to add, remove, and manage their selections effortlessly. To enhance the website's functionality, I integrated the Tinbu Shop API, which streamlined various e-commerce operations. By combining a visually appealing design with essential e-commerce functionalities, the website offers an engaging and efficient platform for sweater shopping.
            </h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" target="_blank" to="https://minokrim.github.io/hngproj2/">VISIT</Link>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" target="_blank" to="https://github.com/minokrim/hngproj2.git">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" target="_blank" to="https://www.figma.com/design/zTmjwQqKJ6PEaiqTUXKeiL/HNG-Task-2?node-id=0-1&t=azNoKsX9y3ea8wCG-0">FIGMA</Link>
                <img src={figma} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>

        <section className="proj storeProj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
        <div className="imgborder">
            <img src={ecommerce} alt="" className="storeimg"/>
            </div>
            <div className="detailSec">
            <h1>The Store</h1>
            <h3>
            I developed a full-stack e-commerce website with features like Google OAuth authentication, a dynamic shopping cart and wishlist, and secure PayPal payment integration. Built using React.js for the front end and Node.js with Express.js for the back end, the platform utilizes PostgreSQL for efficient data management. The application allows users to sign in seamlessly, browse products, manage their cart and wishlist, and complete purchases through PayPal. This project demonstrates my expertise in creating responsive, user-friendly interfaces, building RESTful APIs, and integrating third-party services to deliver a smooth and secure shopping experience.</h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" to="/" target="_blank">VISIT</Link>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com/minokrim/theStore" target="_blank">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>

        <section className="proj2" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
        <div className="imgborder">
            <img src={restaurant} alt="" className="proj2img"/>
            </div>
            <div className="detailSec">
            <h1>TM-30</h1>
            <h3>
            I developed a food ordering platform website that enables users to register their restaurants to offer meals or sign up their companies for food delivery services. Built with React.js for the front end and Node.js/Express.js for the back end, the platform uses PostgreSQL for efficient data storage and management. It features Google OAuth authentication for seamless sign-in and includes secure payment integration via PayPal. This project highlights my ability to design responsive and scalable web applications, implement RESTful APIs, and deliver smooth, user-centric functionality tailored for both restaurant owners and corporate clients.
            </h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" target="_blank" to="https://minokrim.github.io/hngproj2/">VISIT</Link>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" target="_blank" to="https://github.com/minokrim/hngproj2.git">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            {/* <div className="visitLink">
                <Link className="li" target="_blank" to="https://www.figma.com/design/zTmjwQqKJ6PEaiqTUXKeiL/HNG-Task-2?node-id=0-1&t=azNoKsX9y3ea8wCG-0">FIGMA</Link>
                <img src={figma} alt="" className="linkimg"/>
            </div> */}
            </section>
            </div>
        </section>
        
        </section>
        
        <Footer/>
    </div>
}