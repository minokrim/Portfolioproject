import React from "react"
import image1 from './Assets/twitter.png';
import image2 from './Assets/facebook.png';
import image3 from './Assets/linkedin.png';
import image4 from './Assets/instagram.png'
import "./css/footer.css"
function Footer(){
    return <div>
        <main className="footer-sec">
            <h1>Follow Me</h1>
            <hr/>
            <section className="footer-sec-icons">
              <a href="https://www.instagram.com/aba.yomi24?igsh=MWZwbTBkdTZmdndqNQ%3D%3D&utm_source=qr" target="_blank"><img src={image4} alt=""/></a>
              <a href="https://twitter.com/MINOKRIM" target="_blank"><img src={image1} alt=""/></a>
              <a href="https://www.facebook.com/MINOKRIM2001" target="_blank"><img src={image2} alt=""/></a>
              <a href="https://www.linkedin.com/in/alameen-kareem-0b5a7820a/" target="_blank"><img src={image3} alt=""/></a>
            </section>
        </main>

    </div>
}
export default Footer