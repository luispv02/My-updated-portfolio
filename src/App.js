import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import HeaderContent from "./components/header/HeaderContent";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import AOS from 'aos'
import React, { useEffect } from 'react';


function App() {

  AOS.init();

  
  useEffect(() => {
    // Actualizar las etiquetas meta
    updateMetaTags();
  }, []);

  const updateMetaTags = () => {

    console.log('location: ', window.location.hostname)

    const existingOGMetaTags = document.querySelectorAll('meta[property^="og:"]');
    existingOGMetaTags.forEach(tag => tag.remove());

    createMetaTag("og:title", "Mi Pagina Web")
    createMetaTag("og:type", "website")
    createMetaTag("og:image", "https://www.webdevelopmentscripts.com/post-images/685b-change-browser-address-bar-color-chrome-android.jpeg", "image")
    createMetaTag("og:url", window.location.hostname)
    createMetaTag("og:description", "Descripción sobre mi y de la pagina creada")


/*     createMetaTag('og:image:width', 'Descripción sobre mi y de la pagina creada')
    createMetaTag('og:image:height', 'Descripción sobre mi y de la pagina creada') */
  };

  const createMetaTag = (property, content, itemprop) => {
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("property", property);
    if(itemprop){
      metaTag.setAttribute("itemprop", itemprop);
    }
    metaTag.setAttribute("content", content);

    console.log('metaTag: ', metaTag)

    document.head.appendChild(metaTag);
  };

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
