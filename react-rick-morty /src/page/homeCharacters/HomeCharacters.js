import React from 'react'
import ViewCharacters from '../../../../react-single/src/components/view-characters/ViewCharacters'
import ShowCharacters from '../ShowCharacters/ShowCharacters'
import '../../../../react-single/src/page/home/Home.css'


 const HomeCharacters = () =>{
  
  return(
    <div className='home'>
      <ViewCharacters/>
      <ShowCharacters/>
    </div>
    
  )
}

export default HomeCharacters