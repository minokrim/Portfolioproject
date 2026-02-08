import React from "react";
import p2 from "../Assets/p2.png"
import "./works.css"
import Navbar from "../navbar";
import Footer from "../footer";
import arrow from "../Assets/arrow.png"
import git from "../Assets/github.png"
import { Link } from 'react-router-dom';
import unidocs from "../Assets/unidocsport.webp"
import contentsumm from "../Assets/contentsumm.webp"
import voice from "../Assets/voice.webp"
import p5 from "../Assets/cysdl.png"
import ecommerce from "../Assets/ecommerce1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import juice from "../Assets/juice2.png"
import Swal from 'sweetalert2'
import Works2 from "./works2.jsx";

export default function Works(){
    function handleClick(){
        Swal.fire({
  title: "🚧 This Solution is Under Deployment",
  text: "We're currently working on deploying this feature. In the meantime, feel free to visit the GitHub repository for more details.",
    showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
    }
    AOS.init();
    return <div className="workBody">
        <Navbar/>
        
        <section className="projContainer">
        <section className="proj1 proj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
            <div className="imgborder">
            <img src={unidocs} alt="" className="proj2img" data-aos="flip-left" fetchPriority="high"/>
            </div>
            <div className="detailSec">
            <h1>Uni Docs</h1>
            <h3 className="desc">
                UniDocs is a full-stack web application engineered to streamline academic document management for students and educators. It supports CRUD operations on folders and files, real-time file previews, and advanced filtering based on metadata like name, date, size, and type. Built with a React frontend and a Node.js/Express backend, it interfaces with a PostgreSQL database to ensure reliable data persistence and retrieval. The application implements secure user authentication and session handling, follows RESTful API conventions, and maintains a responsive, accessible UI. UniDocs emphasizes modular component architecture, optimized query performance, and clean state management for a seamless user experience across devices.
            </h3>
            <section className="linksection">
            <div className="visitLink">
                <p className="li" to="" target="" onClick={handleClick}>VISIT</p>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com/minokrim/unidocs" target="_blank">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>

        <section className="proj2 proj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
            <div className="imgborder">
            <img src={contentsumm} alt="" className="proj2img" data-aos="flip-left" fetchPriority="high"/>
            </div>
            <div className="detailSec">
            <h1>Content Summ</h1>
            <h3 className="desc">
                ContentSumm is an AI-powered web application built to intelligently summarize long-form content such as articles, documents, or lecture notes into concise, digestible formats. Leveraging modern NLP models via RESTful APIs, it parses and processes unstructured text, delivering structured summaries with adjustable detail levels. The frontend, built with React, offers a minimal and distraction-free UI, while the backend—developed with Node.js and Express—handles file parsing, API orchestration, and summary generation. ContentSumm supports uploads in various formats (PDF, DOCX, TXT) and integrates user history for version tracking. Its architecture focuses on modularity, performance, and seamless user interaction.
            </h3>
            <section className="linksection">
            <div className="visitLink">
                <p className="li" to="" target="" onClick={handleClick}>VISIT</p>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com//unidocs" target="_blank">GITHUB</Link>
                <img src={git} alt="https://github.com/minokrim/contentSummarizer" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>

                <section className="proj1 proj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
            <div className="imgborder">
            <img src={voice} alt="" className="proj2img" data-aos="flip-left" fetchPriority="high"/>
            </div>
            <div className="detailSec">
            <h1>TurtleZence</h1>
            <h3 className="desc">
                Turtlezence is a mission-driven digital platform developed to amplify youth expression, civic engagement, and social impact through multimedia storytelling and community collaboration. Engineered with a modern MERN stack (MongoDB, Express.js, React, Node.js), it supports dynamic content creation, user authentication, scalable APIs, and interactive features such as blog publishing, comment threads, and volunteer opportunities. The system architecture emphasizes modularity, accessibility, and responsiveness across devices. With robust content moderation pipelines, real-time updates, and an admin dashboard for content curation, Turtlezence delivers a seamless and secure environment for young changemakers to connect, share, and lead
            </h3>
            <section className="linksection">
            <div className="visitLink">
                <p className="li" to="" target="" onClick={handleClick}>VISIT</p>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com/minokrim/yuvoice" target="_blank">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>

        <section className="proj cysdProj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
        <div className="imgborder">
            <img src={p5} alt="" className="proj2img" fetchPriority="high"/>
            </div>
            <div className="detailSec">
            <h1>CYSD CAMEROON</h1>
            <h3>
I designed and developed a mission-driven landing page with a focus on encouraging donations, featuring a prominent donation button and responsive layouts to provide a seamless user experience across desktop, tablet, and mobile devices. Built using the same tech stack of React.js, Node.js/Express.js, and PostgreSQL, the platform integrates the PayPal Donation API for secure and seamless transaction processing. Additionally, I incorporated the Mailchimp API for efficient community engagement, allowing targeted email campaigns, and Nodemailer for streamlined communication, sending automated receipts and thank-you messages to donors. This combination of features ensures an intuitive, secure donation process while fostering donor engagement and retention.</h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" to="https://minokrim.github.io/cysd/#/getinvolved" target="_blank">
                VISIT 
                <img src={arrow} alt="" className="linkimg"/>
                </Link>
                
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com/minokrim/cysd" target="_blank">
                GITHUB
                <img src={git} alt="" className="linkimg"/>
                </Link>
            </div>
            </section>
            </div>
        </section>

        <section className="proj1 proj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
            <div className="imgborder">
            <img src={p2} alt="" className="proj1img" data-aos="flip-left" fetchPriority="high"/>
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
{/* 
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
        </section> */}

        <section className="proj2 proj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
        <div className="imgborder">
            <img src={ecommerce} alt="" className="storeimg"/>
            </div>
            <div className="detailSec">
            <h1>The Store</h1>
            <h3>
            I developed a full-stack e-commerce website with features like Google OAuth authentication, a dynamic shopping cart and wishlist, and secure PayPal payment integration. Built using React.js for the front end and Node.js with Express.js for the back end, the platform utilizes PostgreSQL for efficient data management. The application allows users to sign in seamlessly, browse products, manage their cart and wishlist, and complete purchases through PayPal. This project demonstrates my expertise in creating responsive, user-friendly interfaces, building RESTful APIs, and integrating third-party services to deliver a smooth and secure shopping experience.</h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" to="https://the-store-phi.vercel.app/" target="_blank">VISIT</Link>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com/minokrim/theStore" target="_blank">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>

        {/* <section className="proj2" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
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
            </div> }
            </section>
            </div>
        </section> */}

        <section className="proj storeProj" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-testid="project">
        <div className="imgborder">
            <img src={juice} alt="" className="storeimg" fetchPriority="high"/>
            </div>
            <div className="detailSec">
            <h1>Juice Landing Page</h1>
            <h3>
            Designed a vibrant and modern landing page designed for a juice brand. The aim was to capture the brand’s fresh, fruity identity while ensuring a user-friendly experience that encourages sign-ups and engagement. The warm yellow gradient background and fruit imagery immediately evoke freshness and vitality, perfectly aligning with the product.          
            </h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" to="https://juice-nine-self.vercel.app/" target="_blank">VISIT</Link>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" to="https://github.com/minokrim/juice" target="_blank">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>
        
        </section>        
        <Footer/>
    </div>
}