import React,{useState, useEffect} from 'react'
import ViewCharacters from '../../../../react-single/src/components/view-characters/ViewCharacters'
import ShowCharacters from '../ShowCharacters/ShowCharacters'
import '../../../../react-single/src/page/home/Home.css'


 const HomeCharacters = () =>{
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
      <ShowCharacters lang={lang}/>
    </div>
    
  )
}

export default HomeCharacters