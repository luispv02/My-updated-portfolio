import React from 'react'

const Menu = ({showMenu}) => {

  return (
    <div className={showMenu ? 'nav show-menu' : 'nav'}>
        <ul className="nav__list">
            <li className="nav__list__item">
                <a href="#sobre-mi">Sobre Mi</a>
            </li>

            <li className="nav__list__item">
                <a href="#proyectos">Proyectos</a>
            </li>

            <li className="nav__list__item">
                <a href="#contacto">Contacto</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu