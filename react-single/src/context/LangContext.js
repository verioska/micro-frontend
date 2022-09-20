import React, {useEffect}  from 'react'
import {messages as allMessages} from '../lang/messages'
import {IntlProvider } from 'react-intl'
import { useLocalState } from '../custom-hooks/useLocalState'


const langContext = React.createContext()

const LangProvider = ({children}) =>{
  const [locale, setLocale] = useLocalState('lang','es') 
  const currentLocale = locale;
  const messages = allMessages[currentLocale];

  useEffect(() => {
    dispatchEvent(new CustomEvent('language-update',{language:locale}))
  }, [locale])

  const getLocale = (language) => setLocale(language)

  return(
    <langContext.Provider value={{getLocale: getLocale}}>
       <IntlProvider locale={currentLocale} messages={messages}>
          {children}
       </IntlProvider>
    </langContext.Provider>
  );
}

export {LangProvider, langContext}