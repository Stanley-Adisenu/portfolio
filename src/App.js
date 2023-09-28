import "./index";

import colored from "./images/color.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import About from "./components/About"
import CardAndPin from "./components/CardAndPin"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <NavBar/>



      <CardAndPin />
        <About />
      <Services />
      <Skills/>
      <Projects />
      <Contact />

  

       <Footer />
    </div>
  );
}

export default App;
