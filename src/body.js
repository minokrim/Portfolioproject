import React, { useEffect, useRef } from "react";
import "./css/body.css"
import image from "./Assets/me4.jpg"
import resume from "./Assets/Fullstack.pdf"
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Body(){
  const el = useRef(null);

  useEffect(() => {
    AOS.init();
    
    // Typed.js setup
    const typed = new Typed(el.current, {
      strings: [
        "Hi, I'm Kareem Alameen, a passionate Full Stack Developer.",
        "With a growing portfolio of projects showcasing both front-end and back-end expertise.",
        "I aim to bridge the gap between functionality and design.",
        "Explore my work to see how my skills have evolved and the meaningful solutions I bring to life."
      ],
      typeSpeed: 80,
      backDelay: 5000,
      loop: true,
    });

    // Cleanup the Typed instance on component unmount
    return () => typed.destroy();
  }, []);

    return <div>
        <main>
            <section className="sec1">
              <h1 ref={el}></h1>
              <a href={resume} download={"resume.pdf"} target="_blank" rel="noopener noreferrer"><button>Download CV</button></a>
            </section>
            <section className="sec2">
              <a href="ALAMEEN HEADSHOT"><img src= {image} alt=""/></a>
            </section>
            
        </main>
    </div>
}
export default Body;