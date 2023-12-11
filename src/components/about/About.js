import SvgAbout from './SvgAbout'
import development from '../../assets/images/development.gif'
import React, { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    // Actualizar las etiquetas meta
    updateMetaTags();
  }, []);

  const updateMetaTags = () => {

    createMetaTag('og:title', 'Acerca De')
    createMetaTag('og:type', 'website')
    createMetaTag('og:image', 'https://images.unsplash.com/photo-1700721728829-ae246d335d87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=630&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMjMyNjIzNg&ixlib=rb-4.0.3&q=80&w=1200')
    createMetaTag('og:url', 'https://my-updated-portfolio-fkmtxdrrs-luispv02.vercel.app/')
    createMetaTag('og:description', 'Resumen sobre MI y lo que estoy buscando')
  };

  const createMetaTag = (property, content) => {
    console.log('Create metaTag')

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