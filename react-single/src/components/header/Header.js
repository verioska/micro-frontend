import React, {useContext} from 'react'
import {langContext} from '../../context/LangContext'
import Logo from '../../assets/logo_V.png'
import FlagEs from '../../assets/es.png'
import FlagEn from '../../assets/en.png'
import './Header.css';


 const Header = () =>{
  const contextLenguage = useContext(langContext)

  return(
    <header className="header">
      <a href="/"><img src={Logo} className="header__logo" alt="logo" /></a>
      <nav className="header__nav">
        <div  class="header__nav-element">
          <button onClick={() => contextLenguage.getLocale('es')}><a ><img src={FlagEs} alt="logo" class="header__nav-img" /></a></button>
        </div>
        <div class="header__nav-element">
          <button onClick={() => contextLenguage.getLocale('en-US')}><a ><img src={FlagEn} alt="logo" class="header__nav-img" /></a></button>
        </div>
      </nav>
    </header>
  )

}

export default Header