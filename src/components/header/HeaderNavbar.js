import { useState } from 'react'
import Menu from './Menu';

const HeaderNavbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }


  return (
    <div className="header__navbar">
        <div className="header__navbar__title">
            <a href="#header"><h1>LuisPv</h1></a>
        </div>

        <div className='header__navbar__nav'>
            <Menu 
                showMenu={showMenu}
            />
        </div>
  
        <div className="header__navbar__icon-hamburger" onClick={handleShowMenu}>
            <span className={showMenu ? 'navbar__icon-hamburger open' : 'navbar__icon-hamburger'}></span>
        </div>
    </div>
  )
}

export default HeaderNavbar