import whatsapp from '../../assets/images/whatsapp.png';
import gmail from '../../assets/images/gmail.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';


const Contact = () => {
  return (
    <div className="contact"  id="contacto">
        <div className="contact__content">
            <h1>Contacto</h1>

            <div className="contact__content__icons">

                <a href="https://wa.me/527841109307" target="_blank"  rel="noopener noreferrer">
                  <img src={whatsapp} alt="whatsapp" width="50" />
                </a>

                <a href="mailto:luispv.1002@gmail.com" target="_blank"  rel="noopener noreferrer">
                  <img src={gmail} alt="gmail" width="50" />
                </a>

                <a href="https://www.linkedin.com/in/luis-fernando-p%C3%A9rez-varajas-b6539818b/" target="_blank"  rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" width="50" />
                </a>

                <a href="https://github.com/luispv02" target="_blank"  rel="noopener noreferrer">
                  <img src={github} alt="github" width="50" />
                </a>

            </div>

        </div>
    </div>
  )
}

export default Contact