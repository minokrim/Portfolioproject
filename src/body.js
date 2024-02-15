import React ,{useEffect,useRef}from "react"
import "./css/body.css"
import image from "./Assets/website image.JPG"
import resume from "./Assets/RESUME1.pdf"
import Typed from 'typed.js';
function Body(){
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["HI..I'm Kareem Alameen, a budding front-end developer eager to make waves in the digital world. ", 'While my journey as a developer is just beginning, my commitment is unwavering.',"Browse through my portfolio to witness the evolution of my skills and projects."],
        stringsElement: null,
        typeSpeed: 80,
        backDelay: 5000,
        loop:true
      });
      
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return <div>
        <main>
            <section className="sec1">
              <h1 ref={el}></h1>
              <a href={resume} download={"resume.pdf"} target="_blank"><button>Download CV</button></a>
            </section>
            <section className="sec2">
              <a href=""><img src= {image} alt=""/></a>
            </section>
            
        </main>
    </div>
}
export default Body