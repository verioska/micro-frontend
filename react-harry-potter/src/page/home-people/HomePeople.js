import React from 'react'
import ShowPeople from '../show-people/ShowPeople'
import '../../../../react-single/src/page/home/Home.css'
import ViewCharacters from '../../../../react-single/src/components/view-characters/ViewCharacters'

 const HomePeople = () =>{
  
  return(
    <div className='home'>
      <ViewCharacters/>
      <ShowPeople/>
    </div>
  )
}

export default HomePeople