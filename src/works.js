import React from "react"
import "./css/works.css"
import image1 from "./Assets/webpage1.png"
import p2 from "./Assets/p2.png"
import p3 from "./Assets/p3.png"
import { Link } from "react-router-dom"

function Works(){
    return<div>
        <main className="works">
            <p>Featured Projects</p>
            <section className="sec-1">
                <Link to="/Works">
                <div><img src={image1} alt="" id="img1"/></div></Link>
                <Link to="/Works">
                <div><img src={p2} alt="" id="img2"/></div>
                </Link>
                <Link to="/Works">
                <div><img src={p3} alt=""id="img3"/></div>
                </Link>
            </section>
            <section className="sec-2">
                <p>Browse through my portfolio to witness the evolution of my skills and projects. Each endeavor represents a milestone in my journey, showcasing my dedication to excellence and growth.</p>
                <Link to="/WORKS"><button>View More</button></Link>
            </section>
        </main>
    </div>
}
export default Works