import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import {IntlProvider } from 'react-intl'
import CardCharacter from './components/card-character/CardCharacter'
import Card from './components/card/Card'



describe("CardCharacter component", () => {
  it("must display CardCharacter", () => {
   render(<CardCharacter name={'Harry'} />)
  });
})

describe("CardCharacter component", () => {
  it("must display Card", () => {
   render(<IntlProvider><Card name={'Harry'} route={'/react-harry-potter'} imagen={''}/></IntlProvider>)
  });
})


 
  
