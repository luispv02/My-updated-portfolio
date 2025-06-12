const ProjectCard = ({github,imagen,pagina,titulo, descripcion}) => {


  return (
    <div className="project__card">
        <img 
            src={imagen}
            alt='img project'
        />

        <div className="project__card__info">
            <h3>{titulo}</h3>
            <p>{descripcion}</p>    
            <a 
              href={pagina}
              target='_blank'
              rel='noopener noreferrer'
            ><i className="fas fa-link"></i></a>
            <a 
              href={github}
              target='_blank'
              rel='noopener noreferrer'
            ><i className="fab fa-github"></i></a>
        </div>
    </div>
  )
}

export default ProjectCard