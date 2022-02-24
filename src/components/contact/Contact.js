import React from 'react'

const Contact = () => {
  return (
    <div className="contact"  id="contacto" data-aos='fade-up'>
        <div className="contact__content">
            <h1>Contacto</h1>

            <div className="contact__content__icons">

                <a 
                  href='https://wa.me/527841109307'
                ><i className="fab fa-whatsapp-square"></i></a>

                <a 
                  href="mailto:luispv.1002@gmail.com"
                ><i className="fas fa-envelope"></i></a>
                
                <a
                  href="https://www.facebook.com/luisfernando.perezvarajas.5"
                  target='_blank'
                  rel='noopener noreferrer'
                ><i className="fab fa-facebook"></i></a>
              
            </div>

        </div>
    </div>
  )
}

export default Contact