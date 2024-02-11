import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./css/contact.css"
import c1 from "./Assets/location.png"
import c2 from "./Assets/business-removebg-preview.png"
import c3 from "./Assets/phone-removebg-preview.png"
function Contact(){
    return <div>
        <Navbar/>
        <main className="contact">
            <section className="client_details">
                <h1>Contact Form</h1>
                <p>Full name</p>
                <input type="text" name="Fullname" id="" placeholder="Your Name"/>
                <p>Email</p>
                <input type="email" name="email" id="" placeholder="Your Email"/>
                <p>Message</p>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button>Send Message</button>
            </section>
            <section className="my_details">
                <h2>Contact Details</h2>
                <h3><img src={c1} alt=""/>Peterborough On</h3>
                <h3><img src={c2} alt=""/>ayomidekareem563@gmail.com</h3>
                <h3><img src={c3} alt=""/>+1-705-313-3017</h3>
            </section>
        </main>
        <Footer/>
    </div>
}
export default Contact