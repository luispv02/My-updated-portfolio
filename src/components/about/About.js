import SvgAbout from './SvgAbout'
import development from '../../assets/images/development.gif'
import React, { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    // Actualizar las etiquetas meta
    updateMetaTags();
  }, []);

  const updateMetaTags = () => {

    // Crear nuevas etiquetas meta
    createMetaTag('og:title', 'Sobre Mi');
    createMetaTag('og:description', 'Resumen sobre MI y lo que estoy buscando');
    createMetaTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png');
    createMetaTag('og:url', 'https://my-updated-portfolio-fkmtxdrrs-luispv02.vercel.app/');
    // Otras etiquetas meta que puedas necesitar
  };

  const createMetaTag = (property, content) => {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
  };

  return (
    <div className="about" id="sobre-mi">
        <h1>Sobre Mi</h1>
        
        <div className="about__content" data-aos="fade-right">
            <div className="about__content__info">
              <p>Desarrollador Web Front end, buscando mi primera oportunidad laboral con el fin de obtener experiencia y mayor conocimiento en este mundo frond end, y aportar lo que se, siempre dando lo mejor para obtener el resultado esperado. Aprendiendo de forma autodidacta.</p>

              <div className="about__content__icons">
                <a 
                  href="https://github.com/luispv02"
                  target='_blank'
                  rel='noopener noreferrer'
                ><i className="fab fa-github"></i></a>

                <a
                  href='https://www.linkedin.com/in/luis-fernando-p%C3%A9rez-varajas-b6539818b/'
                  target='_blank'
                  rel='noopener noreferrer'
                ><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

            <img 
              src={development}
              alt='img development'
              data-aos="fade-right"
            />
        </div>

        <SvgAbout />
    </div>
  )
}

export default About