import React from 'react'
import { objProjects } from '../../utils/objProjects'
import ProjectCard from './ProjectCard'
import SvgProjects from './SvgProjects'


const Projects = () => {


  return (
    <div className="projects" id="proyectos">
        <h1 data-aos="fade-down">Proyectos</h1>
        <div className="projects__content">
            
            {
                objProjects.map(project => (
                    <ProjectCard 
                        key={project.titulo}
                        {...project}
                    />
                ))
            }
        </div>

        <SvgProjects />
    </div>
  )
}

export default Projects