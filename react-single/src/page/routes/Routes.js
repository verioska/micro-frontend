import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../home/Home'
import {LangProvider} from  '../../context/LangContext'

 const Routes = () =>{

  return(
    <LangProvider>
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </LangProvider>
  )

}

export default Routes