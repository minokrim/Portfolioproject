import React, {useState }from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios"
import Swal from "sweetalert2"
import "./css/contact.css"
import c1 from "./Assets/location.png"
import c2 from "./Assets/business-removebg-preview.png"
import c3 from "./Assets/phone-removebg-preview.png"
function Contact(){
    const [fullname, setfullname]=useState("")
    const [email,setemail]=useState("")
    const [message,setmessage]=useState("")

    function push(e){
        if(!fullname || !email){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Complete All Field!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "input valid email",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            return; // Stop form submission if email format is invalid
        }
        e.preventDefault()
        var cl_message={
            fullname:fullname,
            email:email,
            message:message
        }
        axios.post("http://localhost:5000/db/react",cl_message)
        .then((res)=>{
            console.log(res)
            setfullname("");
            setemail("");
            setmessage("");
        })
        .catch((error)=>{
            console.log(error)
        })
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "I'll get back to you shortly",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return <div>
        <Navbar/>
        <main className="contact">
            <section className="client_details">
                <h1>Contact Form</h1>
                <p>Full name</p>
                <input type="text" name="Fullname" id="form" placeholder="Your Name" value={fullname} onChange={((e)=>{setfullname(e.target.value)})}/>
                <p>Email</p>
                <input type="email" name="email" id="form" placeholder="Your Email" value={email} onChange={((e)=>{setemail(e.target.value)})}/>
                <p>Message</p>
                <textarea type="text" name="message" id="form" cols="30" rows="10" value={message} onChange={(e)=>{setmessage(e.target.value)}} ></textarea>

                <button onClick={push}>Send Message</button>
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