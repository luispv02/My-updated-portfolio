import html from '../../assets/images/html.svg'
import css from '../../assets/images/css.svg'
import js from '../../assets/images/js.svg'
import react from '../../assets/images/react.svg'
import redux from '../../assets/images/redux.svg'
import bootstrap from '../../assets/images/bootstrap.svg'
import tailwind from '../../assets/images/tailwind.svg'
import responsive from '../../assets/images/responsive.svg'
import SvgSkills from './SvgSkills'

const Skills = () => {

  return (
    <div className="skills">
        <div className="skills__content">
            <h1 data-aos='fade-down'>Tecnologias</h1>
            <div className="skills__content__technologies" data-aos="fade-up">
                <div className="skills__content_technologies__image">
                    <img 
                        src={ html } 
                        alt='icon html'
                    />
                </div>

                <div className="skills__content_technologies__image">
                    <img 
                        src={ css } 
                        alt='icon css'
                    />
                </div>

                <div className="skills__content_technologies__image">
                    <img 
                        src={ js } 
                        alt='icon js'
                    />
                </div>

                <div className="skills__content_technologies__image">
                    <img 
                        src={ react } 
                        alt='icon react'
                    />
                </div>

                <div className="skills__content_technologies__image">
                    <img 
                        src={ redux } 
                        alt='icon redux'
                    />
                </div>

                <div className="skills__content_technologies__image">
                <img 
                    src={ bootstrap } 
                    alt='icon bootstrap'
                />
                </div>

                <div className="skills__content_technologies__image">
                    <img 
                        src={ tailwind }
                        alt='icon tailwind' 
                    />
                </div>

                <div className="skills__content_technologies__image">
                    <img 
                        src={ responsive } 
                        alt='icon responsive'
                    />
                </div> 
            </div>
        </div>
        <SvgSkills />
    </div>
  )
}

export default Skills