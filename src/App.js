import "./index";
import colored from "./images/color.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from "react";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import About from "./components/About"
import CardAndPin from "./components/CardAndPin"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import marvel from "./images/marvel.png"
import logins from "./images/login.png"


function App() {
  const[project,setProject]=useState([
    {img:marvel, alt:"a picture of one of my works",caption:"Marvel-universe is everything a marvel fan will need to cater for his or her unsatiable appetite for the great movies Marvel Universe has to offer. ",extra:"It is still a work in progress",link:"https://www.marvel-universe-6il1.onrender.com/"},
    {img:logins, alt:"a picture of one of my works",caption:"Bringing your UI to live with the magic of 0s and 1s ",extra:"",link:""}
    // {img:"", alt:"",caption:"",extra:"",link:""}
  ])

  const[service,useService]= useState([
    {icon:"fa-solid fa-globe",job:"Web Dev"},
    {icon:"fa-solid fa-user",job:"Front-End Dev"},
    {icon:"fa-solid fa-hand-holding-dollar",job:"E-commerce"},
    {icon:"fa-solid fa-recycle",job:"Web Redesign"},
    {icon:"fa-solid fa-database",job:"Database Mgt."},
    {icon:"fa-solid fa-user",job:"Content Mgt."}
  ])

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <NavBar/>

      <CardAndPin />
        <About />
      <Services service={service} />
      <Skills/>
      <Projects project={project} />
      <Contact />

  

       <Footer />
    </div>
  );
}

export default App;
