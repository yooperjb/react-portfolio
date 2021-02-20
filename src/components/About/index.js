import React from 'react';
import aboutPic from "../../assets/images/profile.jpg";

const About = () => {
    return (
        <section>
            <h1 id='about'>About me</h1>
            <img src={aboutPic} className="profile-photo" style={{ width: "100%"}} alt="Profile Photo" />
            <p>I was born and raised in a small town in south-western Michigan. After high school I traveled around a bit and fell in love with traveling and taking photographs. Soon after I started the photography program at Northern Michigan University and received my Bachelor of Fine Arts in 2002.
            </p>
            <p>
            For the next five years, I worked seasonally from spring to fall in Yosemite National Park; leaving for the winters to travel, bike tour, climb, and seek adventure. During my time in Yosemite I was employed a couple seasons with the National Park Service as a Physical Science Technician. It was then I became interested in spatial sciences and Geographical Information Systems (GIS). In the spring of 2007, I started the GIS certificate program at Humboldt State University, and continued on to receive my Masters of Science in GIS in 2012.
            </p>
            <p>
            During my years as a GIS Analyst I also became interested in website design and development. I built a few websites for small companies, special districts, and also helped build a couple small javascript applications.
            </p>
        </section>
    )
};

export default About;