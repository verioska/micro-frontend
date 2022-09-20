import React from 'react';
import { useHistory } from "react-router-dom"
import {FormattedMessage} from 'react-intl'
import './Card.css';

 const Card = ({name, route, imgen}) =>{
  const history = useHistory();
  
  const onclickButton = () =>history.push(route);
  
  return(
    <div className="card">
      <div className="card__element  card__element--modifier">
        <img src={imgen}  alt="a wallpaper" className="card__element-img" />
      </div>
      <div className="card__element card__element--change">
        <h4 className="card__element-item">{name}</h4>
        <button onClick ={() => onclickButton()} className="card__element-button">
          <FormattedMessage id="card.title"/>
        </button>
      </div>
    </div>
  )
}

export default Card
