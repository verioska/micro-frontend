import React from 'react'
import Header from '../../../../react-single/src/components/header/Header'
import {FormattedMessage} from 'react-intl'
import {LangProvider} from  '../../context/LangContext'
import './ViewCharacters.css'
import '../../../../react-single/src/page/home/Home.css'

 const ViewCharacters = () =>{

  return(
    <LangProvider>
      <div>
        <div className="home__element home__element--modifier"><Header/></div>
        <div className="home__element home__element--title">
          <FormattedMessage id="card.title"/>
        </div>
      </div>
    </LangProvider>
  )
}

export default ViewCharacters