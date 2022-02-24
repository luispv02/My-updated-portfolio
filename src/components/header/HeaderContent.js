import React from 'react'
import BackgroundAnimate from './BackgroundAnimate'
import HeaderNavbar from './HeaderNavbar'
import Hero from './Hero'
import SvgHeader from './SvgHeader'

const HeaderContent = () => {
  return (
    <div className="header" id="header">

      <BackgroundAnimate />

      <div className="header__content">

        <HeaderNavbar />

        <Hero />

      </div>

        <SvgHeader />
    </div>
  )
}

export default HeaderContent