import { skills } from '../../utils/objSkills'

const Skills = () => {

  return (
    <div className="skills">
        <div className="skills__content">
            <h1>Tecnologias</h1>
            <div className="skills__content__technologies">
                {
                    skills.map((skill) => (
                        <div className="skills__content_technologies__image" key={skill.titulo}>
                            <img 
                                src={skill.imagen} 
                                alt={`icon ${skill.titulo.toLowerCase()}`}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
        {/* <SvgSkills /> */}
    </div>
  )
}

export default Skills