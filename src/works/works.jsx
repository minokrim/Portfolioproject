import React from "react";
import p2 from "../Assets/p2.png"
import p3 from "../Assets/p3.png"
import p4 from "../Assets/p4.png"
import "./works.css"
import Navbar from "../navbar";
import Footer from "../footer";
import arrow from "../Assets/arrow.png"
import git from "../Assets/github.png"
import { Link } from 'react-router-dom';
import figma from "../Assets/figma.png"
export default function Works(){
    return <div className="workBody">
        <Navbar/>
        <section>
        <section className="proj1 proj">
            <div className="imgborder">
            <img src={p2} alt="" className="proj1img"/>
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

        <section className="proj2">
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

        <section className="proj3">
            <div className="imgborder">
            <img src={p4} alt="" className="proj3img"/>
            </div>
            <div className="detailSec">
                <h1>TO-DO LIST</h1>
            <h3>
            My to-do list application was developed using Node.js and EJS (Embedded JavaScript). This app simplifies task management with a clean and intuitive interface, designed to enhance productivity and organization. Powered by Node.js on the backend, the app ensures seamless data handling and real-time updates, making task management efficient and hassle-free. EJS templates facilitate dynamic content rendering, allowing users to add, edit, and delete tasks effortlessly.
            </h3>
            <section className="linksection">
            <div className="visitLink">
                <Link className="li" target="_blank">VISIT</Link>
                <img src={arrow} alt="" className="linkimg"/>
            </div>
            <div className="visitLink">
                <Link className="li" target="_blank" to="https://github.com/minokrim/todolist.git">GITHUB</Link>
                <img src={git} alt="" className="linkimg"/>
            </div>
            </section>
            </div>
        </section>
        </section>
        
        <Footer/>
    </div>
}