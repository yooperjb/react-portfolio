import React from "react";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook.png";

const Footer = () => {
    //console.log("Photos: " ,photos)
    return (
        <footer>
            <div id="logos">
                <a href="https://github.com/yooperjb" target="_blank"><img alt="Github Logo" src={github} /></a>
                <a href="https://www.linkedin.com/in/barnesjason/" target="_blank"><img alt="Linked In Logo" src={linkedin} /></a>
                <a href="https://www.facebook.com/yooperjb" target="_blank"><img alt="Facebook Logo" src={facebook} /></a>
            </div>
        </footer>
    )
}

export default Footer;