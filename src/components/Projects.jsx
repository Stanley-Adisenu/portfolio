const Projects = (props) => {
  const project = props.project;
  return (
    <div >
    
    
    <div id='work' className="work" data-aos="flip-down"  data-aos-duration="1500">
        <h3>Projects</h3>
        <div style={{display:"flex",width:"100vw",flexWrap:"wrap"}}>
        {project.map((projects)=>(
        
        <div className="work-Card" >
                 <a target='blank' href={projects.link}>
                 <div className="work-cards">
                    <div className="work-img"><img src={projects.img} alt="a picture of one of my works" /></div> 
                    <section>{projects.job} 
                      <br />
                      {projects.extra}
                    </section>
                  </div>
                </a>
                
                  </div>
              ))}
        </div>

        
    
          
       
        </div>

        

    
   
  </div>
  )
}

export default Projects
