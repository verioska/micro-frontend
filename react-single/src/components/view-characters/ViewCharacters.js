import React from 'react'
import Header from '../../../../react-single/src/components/header/Header'
import {FormattedMessage} from 'react-intl'
import './ViewCharacters.css'
import '../../../../react-single/src/page/home/Home.css'
import {messages as allMessages} from '../../../../react-single/src/lang/messages'
import {IntlProvider } from 'react-intl'

 const ViewCharacters = () =>{
  const currentLocale = 'en-US';
  const messages = allMessages[currentLocale];
  
  return(
    <div>
      <IntlProvider locale={currentLocale} messages={messages} >
        <div className="home__element home__element--modifier"><Header/></div>
        <div className="home__element home__element--title">
          <FormattedMessage id="card.title"/>
        </div>
      </IntlProvider>
    </div>
  )

}

export default ViewCharacters