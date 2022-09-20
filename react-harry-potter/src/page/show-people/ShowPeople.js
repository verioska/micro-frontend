import React, { useState, useEffect } from 'react'
import { getCharacters } from '../../clients/characters'
import CardCharacter from '../../../../react-single/src/components/card-character/CardCharacter'


 const ShowPeople = (lang) =>{
  const [characters, setCharacters] = useState([]) 

  useEffect(() => {
    showCharacters()
  }, [])

  const showCharacters = async () => {
    try {
      const characters = await getCharacters()
      characters.length && setCharacters(characters)
    } catch (error) {
      console.error('Error: =>>>>>>>', error, error.message)
    }
  }

  const renderCharacters = () =>{
    return(
      characters.map((character) => 
      (
        character.image &&
          <CardCharacter 
          key={character.name}
          name={character.name} 
          image={character.image} 
          actor={character.actor} 
          dateOfBirth={character.dateOfBirth}
          house={character.house} 
          type='harry'
          lang={lang.lang}
          />
        )
      )
    )
  }

  return(
    <div className='characters' >
      {characters.length && renderCharacters()}
    </div>
  )
}

export default ShowPeople