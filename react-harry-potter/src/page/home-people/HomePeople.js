import React, {useEffect,useState} from 'react'
import ShowPeople from '../show-people/ShowPeople'
import ViewCharacters from '../../../../react-single/src/components/view-characters/ViewCharacters'
import '../../../../react-single/src/page/home/Home.css'

 const HomePeople = () =>{
  const initialLang = localStorage.getItem('lang')
  const [lang, setLang] = useState(initialLang)
  
  useEffect(()=>{
    window.addEventListener('language-update',(event) => {
      setLang(event.target.localStorage.lang)
    } )
  },[])


  return(
    <div className='home'>
      <ViewCharacters/>
      <ShowPeople lang={lang}/>
    </div>
  )
}

export default HomePeople