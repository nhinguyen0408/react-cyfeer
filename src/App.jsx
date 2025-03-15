import { Fragment, useState } from 'react'
import './App.css'
import AppRouter from './routers/AppRouter'
import Loading from './component/Loading'
import { AppContext } from './context/app-context'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [company, setCompany] = useState(null)

  return (
    <Fragment>
      <AppContext.Provider value={{isLoading, setIsLoading, company, setCompany}}>
        <AppRouter />
        { isLoading && <Loading /> } 
      </AppContext.Provider>
      
    </Fragment>
  )
}

export default App
