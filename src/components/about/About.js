import SvgAbout from './SvgAbout'
import development from '../../assets/images/development.gif'

const About = () => {

  return (
    <div className="about" id="sobre-mi">
        <h1>Sobre Mi</h1>
        
        <div className="about__content">
            <div className="about__content__info">
              <p>Desarrollador web FrontEnd con dos años de experiencia y conocimientos básicos en el BackEnd, me enfoco en crear soluciones funcionales, accesibles y visualmente atractivas, me motiva enfrentar desafíos que impulsen mi crecimiento profesional, me permitan aprender nuevas tecnologías y aportar lo que se ha proyectos innovadores.</p>

            {/*   <div className="about__content__icons">
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
              </div> */}
            </div>

            <img 
              src={development}
              alt='img development'
            />
        </div>

        {/* <SvgAbout /> */}
    </div>
  )
}

export default About