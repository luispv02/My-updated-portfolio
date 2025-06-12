import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import HeaderContent from "./components/header/HeaderContent";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";


function App() {

  /* useEffect(() => {
    const ogTitleMetaTag = document.querySelector('meta[property="og:title"]');

    if(ogTitleMetaTag){
      ogTitleMetaTag.content = 'Titulo Modificado desde el componente';
    }
  }, []) */
  
  /* useEffect(() => {
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
    createMetaTag("og:url", "https://www.google.com/")
    createMetaTag("og:description", "Descripción sobre mi y de la pagina creada")
    createMetaTag("og:image:type", "image/jpeg")
    createMetaTag("og:image:width", "256")
    createMetaTag("og:image:height", "256")

  }; */

  /* const createMetaTag = (property, content, itemprop) => {
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("property", property);
    if(itemprop){
      metaTag.setAttribute("itemprop", itemprop);
    }
    metaTag.setAttribute("content", content);
    console.log('metaTag: ', metaTag)

    document.head.appendChild(metaTag);
  }; */

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
