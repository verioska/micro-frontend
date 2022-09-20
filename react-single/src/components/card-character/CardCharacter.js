import React from 'react'
import './CardCharacter.css'

 const CardCharacter = ({name, image, actor, dateOfBirth, house, type, gender, species}) =>{

  const renderContainerHarry = () => {
    return(
      <>
        <h1>{actor}</h1>
        <p>Actor:{name}</p>
        <p>Fecha de nacimiento:{dateOfBirth}</p>
        <p>Casa: {house}</p>
      </>
    )
  }
  
  const renderContainerRickAndMorty = () => {
    return(
      <>
        <h1>{name}</h1>
        <p>Especie:{species}</p>
        <p>Sexo:{gender}</p>
      </>
    )
  }

  return(
    <div class="wrapper" key={name}>
      <div class="card">
        <img src={image} />
        <div class="descriptions">
          {type === 'harry' && renderContainerHarry()}
          {type === 'rick' && renderContainerRickAndMorty()}
        </div>
      </div>
    </div>
  )
}

export default CardCharacter