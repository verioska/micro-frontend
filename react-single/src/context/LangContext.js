import React, {useState} from 'react'
import {messages as allMessages} from '../lang/messages'
import {IntlProvider } from 'react-intl'


const langContext = React.createContext()

const LangProvider = ({children}) =>{
  const [locale, setLocale] = useState('es') 
  const currentLocale = locale;
  const messages = allMessages[currentLocale];

  const getLocale = (lenguaje) => setLocale(lenguaje)
   
  return(
    <langContext.Provider value={{getLocale: getLocale}}>
       <IntlProvider locale={currentLocale} messages={messages}>
         {children}
       </IntlProvider>
    </langContext.Provider>
  );
}

export {LangProvider, langContext}