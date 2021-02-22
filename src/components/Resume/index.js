import React from 'react';

const Resume = () => {

    return (
        <section>
            <h1>
                Resume
            </h1>
            <p>Download my <a href="https://drive.google.com/file/d/1fq-6GcCXqTN6HHRnm3vgjWq1xxw4ADPZ/view?usp=sharing">resume</a></p>
            <h3>Front-end Proficiencies</h3>
            <ul className="resumeList">
                <li>HTML</li>
                <li>CSS</li>
                <li>javascript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>

            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul className="resumeList">
                <li>Node</li>
                <li>MySQL</li>
                <li>APIs</li>
                <li>Mongo</li>
                
            </ul>
        </section>
    )
}

export default Resume;