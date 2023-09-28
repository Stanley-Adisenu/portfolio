import React from 'react'

const Services = () => {
  return (
    <div>
        <div id='services' className="services"  data-aos="fade-down-right" data-aos-duration="500" data-aos-delay="10" data-aos-offset="0">
        <h3>Services</h3>
        <div className="row">
        <div className="cardlings">
        <i class="fa-solid fa-globe"></i>
            <p>Web Dev</p>
          </div>
          <div className="cardlings">
          <i class="fa-solid fa-user"></i>
            <p>Front-End Dev</p>
          </div>
          <div className="cardlings">
          <i class="fa-solid fa-hand-holding-dollar"></i>
            <p>E-commerce</p>
          </div>
        </div>
         
        <div className="row">
        <div className="cardlings">
        <i class="fa-solid fa-recycle"></i>
           <p>Web Redesign</p>
          </div>
          <div className="cardlings">
          <i class="fa-solid fa-user"></i>
            <p>Content Mgt.</p>
          </div>
          <div className="cardlings">
          <i class="fa-solid fa-database"></i>
          <p>Database Mgt.</p>
          </div>
        </div>


        </div>
      </div>
  )
}

export default Services
