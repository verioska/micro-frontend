import React from 'react'

import './CardCharacter.css'

 const CardCharacter = ({name, image, actor, dateOfBirth, house}) =>{

  return(
    <div class="wrapper" key={name}>
      <div class="card">
        <img src={image} />
        <div class="descriptions">
            <h1>{actor}</h1>
            <p>Actor:{name}</p>
            <p>Fecha de nacimiento:{dateOfBirth}</p>
            <p>Casa: {house}</p>
        </div>
      </div>
    </div>
  )

}

export default CardCharacter