import React from "react";
import Navbar from "./navbar";
import Body from "./body";
import Works from "./works";
import Footer from "./footer";
import About from "./about";

function Home(){    
    return <div>
        <Navbar/>
        <Body/>
        <Works/>
        <Footer/>
    </div>
}
export default Home