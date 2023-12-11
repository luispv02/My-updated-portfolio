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

    createMetaTag('og:title', 'Mi Pagina Web')
    createMetaTag('og:type', 'website')
    createMetaTag('og:image', 'https://images.unsplash.com/photo-1700721728829-ae246d335d87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=630&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMjMyNjIzNg&ixlib=rb-4.0.3&q=80&w=1200', 'image',)
    createMetaTag('og:url', 'https://my-updated-portfolio-fkmtxdrrs-luispv02.vercel.app/')
    createMetaTag('og:description', 'Descripción sobre mi y de la pagina creada')
  };

  const createMetaTag = (property, content, itemprop) => {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    if(itemprop){
      metaTag.setAttribute('itemprop', itemprop);
    }
    metaTag.setAttribute('content', content);

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
