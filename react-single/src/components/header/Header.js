import React, {useContext} from 'react'
import {langContext} from '../../context/LangContext'
import './Header.css';


 const Header = () =>{
  const contextLenguage = useContext(langContext)

  return(
    <header className="header">
      <a href="/"><img src={require("../../assets/Logo_V.png")} className="header__logo" alt="logo" /></a>
      <nav className="header__nav">
        <div onClick={() => contextLenguage.getLocale('es')} class="header__nav-element">Español</div>
        <div onClick={() => contextLenguage.getLocale('en-US')} class="header__nav-element">Ingles</div>
      </nav>
    </header>
  )

}

export default Header