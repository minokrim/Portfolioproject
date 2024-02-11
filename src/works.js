import React from "react"
import "./css/works.css"
import image1 from "./Assets/webpage1.png"

function Works(){
    return<div>
        <main className="works">
            <p>Featured Projects</p>
            <section className="sec-1">
                <div><img src={image1} alt=""/></div>
                <div><img src={image1} alt="" id="img2"/></div>
                <div><img src={image1} alt=""id="img3"/></div>
            </section>
            <section className="sec-2">
                <p>Browse through my portfolio to witness the evolution of my skills and projects. Each endeavor represents a milestone in my journey, showcasing my dedication to excellence and growth.</p>
                <button>View More</button>
            </section>
        </main>
    </div>
}
export default Works