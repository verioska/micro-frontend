import React from 'react'
import {FormattedMessage} from 'react-intl'
import {messages as allMessages} from '../../lang/messages'
import {IntlProvider } from 'react-intl'
import './CardCharacter.css'

 const CardCharacter = ({name, image, actor, dateOfBirth, house, type, gender, species,lang}) =>{
  const currentLocale = lang;
  const messages = allMessages[currentLocale];

  const renderContainerHarry = () => {
    return(
      <>
        <h1 className="wrapper__elemen-h">{actor}</h1>
        <p className="wrapper__elemen-p"><FormattedMessage id="card.actor"/>: {name}</p>
        <p className="wrapper__elemen-p"><FormattedMessage id="card.date"/>: {dateOfBirth}</p>
        <p className="wrapper__elemen-p"><FormattedMessage id="card.house"/>: {house}</p>
      </>
    )
  }
  
  const renderContainerRickAndMorty = () => {
    return(
      <>
        <h1 className="wrapper__elemen-h">{name}</h1>
        <p className="wrapper__elemen-p"><FormattedMessage id="card.species"/>: {species}</p>
        <p className="wrapper__elemen-p"><FormattedMessage id="card.gender"/>: {gender}</p>
      </>
    )
  }

  return(
    <IntlProvider locale={currentLocale} messages={messages}>
      <div className="wrapper" key={name}>
        <div className="wrapper__element">
          <img src={image} className="wrapper__element-img" />
          <div className="wrapper__elemen--change">
            {type === 'harry' && renderContainerHarry()}
            {type === 'rick' && renderContainerRickAndMorty()}
          </div>
        </div>
      </div>
    </IntlProvider>
  )
}

export default CardCharacter