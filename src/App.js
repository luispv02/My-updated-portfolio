import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import HeaderContent from "./components/header/HeaderContent";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import AOS from 'aos'


function App() {

  AOS.init();

  return (
    <>
     <HeaderContent />

     <About />

     <Projects />

     <Skills />

     <Contact />
    </>
  );
}

export default App;
