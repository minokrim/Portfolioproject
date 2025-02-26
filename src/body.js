import React, { useEffect, useRef } from "react";
import "./css/body.css"
import image from "./Assets/me4.jpg"
import resume from "./Assets/resume.pdf"
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
        "Hi, I'm Kareem Alameen, a passionate Software engineer.",
        "With a strong foundation in both front-end and back-end development.",
        "I aim to bridge the gap between functionality and design.",
        "Explore my work to see how I turn ideas into impactful solutions."
      ],
      typeSpeed: 80,
      backDelay: 5000,
      loop: true,
      showCursor:false
    });

    // Cleanup the Typed instance on component unmount
    return () => typed.destroy();
  }, []);

    return <div className="w-[100vh] border border-solid border-red-600">
        <main>
            <section className="sec1">
              <h1 ref={el} ></h1>
              <a href={resume} download={"resume.pdf"} target="_blank" rel="noopener noreferrer"><button>Download CV</button></a>
            </section>
            <section className="sec2 bg-red-600">
              <a href="ALAMEEN HEADSHOT"><img src= {image} alt=""/></a>
            </section>
            
        </main>
    </div>
}
export default Body;