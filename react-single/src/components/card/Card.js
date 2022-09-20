import React from 'react';
import { useHistory } from "react-router-dom"
import {FormattedMessage} from 'react-intl'
import './Card.css';

 const Card = ({name, route}) =>{
  const history = useHistory();
  
  const onclickButton = () =>history.push(route);
  
  return(
    <div className="card">
      <div className="card__element  card__element--modifier">
        <img src={require('../../assets/images.jpeg')}  alt="a wallpaper" className="card__element-img" />
          {/* <video src={CoverVideo} width="640" height="480"  autoplay></video> */}
          {/* <ReactPlayer
        url={'https://www.youtube.com/watch?v=1wEsPDWcRlk'}
        width='100%'
        height='100%'
        controls
        loop
        className="react-player"
        /> */}
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
