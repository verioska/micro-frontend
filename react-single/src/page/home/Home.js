import React from 'react'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import {FormattedMessage} from 'react-intl'
import imgHarry from '../../assets/harry.jpg'
import imgRick from '../../assets/rick.jpeg'
import './Home.css';


 const Home = () =>{
  return(
      <div className='home'>
        <div className="home__element home__element--modifier"><Header/> </div>
        <div className="home__element home__element--text">
          <div className="home__element-item">
            <FormattedMessage id="home.title"/>
          </div>
          <div className="home__element-item home__element--changer">Warner bros</div>
        </div>
        <div className="home__element">
          <div className="home__element-card"> 
            <Card 
            name={'Harry Potter'} 
            route={'/react-harry-potter'} 
            imgen={imgHarry}
            />
            <Card 
            name={'Rick and Morty'} 
            route={'/react-rick-morty'}
            imgen={imgRick}
            />
          </div>
        </div>
      </div>
    )
}

export default Home