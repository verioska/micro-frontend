import React, { useState, useEffect } from 'react'
import { getCharacters } from '../../clients/characters'
import CardCharacter from '../../../../react-single/src/components/card-character/CardCharacter'


 const ShowCharacters = (lang) =>{
  const [characters, setCharacters] = useState([]) 

  useEffect(() => {
    showCharacters()
  }, [])

  const showCharacters = async () => {
    try {
      const characters = await getCharacters()
      characters?.results.length && setCharacters(characters.results)
    } catch (error) {
      console.error('Error: =>>>>>>>', error, error.message)
    }
  }

  const renderCharacters = () =>{
    return(
      characters?.map((character) => 
      (
        character.image &&
          <CardCharacter 
          key={character.name} 
          name={character.name} 
          image={character.image} 
          gender={character.gender}
          species={character.species}
          type='rick'
          lang={lang.lang}
          />
        )
      )
    )
  }

  return(
    <div className='characters' >
      {renderCharacters()}
    </div>
  )

}

export default ShowCharacters