import React from 'react'
import marvel from "../images/marvel.png"
import login from "../images/login.png"

const Projects = () => {
  return (
  
    <div>
    <div id='work' className="work" data-aos="flip-down"  data-aos-duration="1500">
    <h3>Projects</h3>

      <div className="work-Card" >
     <a target='blank' href="https://www.marvel-universe-6il1.onrender.com/">
     <div className="work-cards">
        <div className="work-img"><img src={marvel} alt="a picture of one of my works" /></div> 
        <section>Marvel-universe is everything a marvel fan will need to cater for his or her unsatiable appetite for the great movies Marvel Universe has to offer. 
          <br />
          It is still a work in progress
        </section>
      </div>
    </a>
     <a href="#ui">
     <div id='ui' className="work-cards">
        <div className="work-img"><img src={login} alt="a picture of one of my works" /></div>
        <section>
          Bringing your UI to live with the magic of 0s and 1s 
        
        </section>
      </div>
     </a>
      </div>
   
    </div>
  </div>
  )
}

export default Projects
