import React from 'react'
import pin from "../images/pin.png"
const CardAndPin = () => {
  return (
    <div>
    <div className="pin">
   
    <img src={pin} alt="" />
  </div>

  <div className="card">
    <div className="text">
      <h4>Hola &#x1F44B; , I am </h4>
      <h2>Adisenu Stanley Edem</h2>
      <h4>- Software Engineer  &#x1F680;</h4>
      <a target="blank" href="/ADISENU_RESUME.pdf"><p className="lets-work">Resume</p></a>
    </div>
  </div>
  </div>
  )
}

export default CardAndPin
