import React from 'react'
import colored from '../images/color.png'

const About = () => {
  return (
  
    
    <div id='about' className="about">
    <div className="simple-img">
      <img src={colored} alt="" />
    </div>
    <div className="about-text">
      <h3>About Me</h3>
      <p>
        ...a computer engineering student with an unwavering passion for
        building enchanting websites. Whether it is personal blogs or
        sophiscated dashboards, I make code come alive with captivating
        designs and a blast of creativity.
      </p>
        <div >
          <p>
            I believe that a well-crafted website is a fusion of logic and
            imagination and I am always on the lookout to transform your
            ideas into beautiful experiences.
          </p>
          <p>
            And yes I love reading not just bugs and codes but books that
            take me away from reality. <br />I love making art &#x1F3A8;, watching movies (
            watch out, I am your next <span style={{color: "red"}}>Spider-Man &#x1F577;</span> )and listening to music &#x1F3BC;( I
            am a terrible singer by the way).
          </p>
          <p>
            I dream of traveling around the world &#x1F30D; someday. Yes, I will. 
          </p>
        </div>
        <p>I am
            open to collaborate on your web projects or work in a team from
            anywhere in the world. Let us work together to create magic &#x2728;</p>         
    </div>
  </div>
  )
}

export default About
