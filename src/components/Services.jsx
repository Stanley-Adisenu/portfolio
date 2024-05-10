import React from 'react'

const Services = (props) => {
  const service= props.service;
  return (
    <div>
     
        <div id='services' className="services"  data-aos="fade-down-right" data-aos-duration="500" data-aos-delay="10" data-aos-offset="0">
        <h3>Services</h3>
        <div  style={{display:"flex",flexWrap:"wrap"}}>
        {service.map((services)=>(
          <div className="row">
          <div className="cardlings">
          <i class={services.icon}></i>
              <p>{services.job}</p>
            </div>
          </div>        
      ))}
        </div>
       
        </div>
      </div>
  )
}

export default Services
